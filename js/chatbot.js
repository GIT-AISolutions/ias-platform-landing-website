(() => {
  const MAX_MESSAGE_LENGTH = 2000;

  function codieLogo() {
    return '<img src="images/opencodie-logo.png" alt="" aria-hidden="true" />';
  }

  function closeIcon() {
    return `
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
      </svg>
    `;
  }

  function sendIcon() {
    return `
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3.2 10h10.9M10.7 5.5 15.2 10l-4.5 4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `;
  }

  const root = document.createElement('div');
  root.className = 'site-chat';
  root.innerHTML = `
    <section class="site-chat-panel" aria-label="OpenCodie chat">
      <div class="site-chat-head">
        <div class="site-chat-brand">
          <span class="site-chat-avatar">${codieLogo()}</span>
          <div>
            <strong>Codie</strong>
            <small>Ask for help with the platform.</small>
          </div>
        </div>
        <button class="site-chat-close" type="button" aria-label="Close chat">
          ${closeIcon()}
        </button>
      </div>
      <div class="site-chat-log">
        <div class="site-chat-msg bot">
          <div class="site-chat-msg-body"><p>Hi, I'm Codie. Ask me about projects, workspaces, deployments, databases, or billing.</p></div>
        </div>
      </div>
      <div class="site-chat-prompts">
        <button type="button">What is OpenCodie?</button>
        <button type="button">Do I need DevOps experience?</button>
        <button type="button">What does it cost?</button>
      </div>
      <p class="site-chat-error" role="alert" hidden></p>
      <form class="site-chat-form">
        <textarea name="message" rows="1" maxlength="${MAX_MESSAGE_LENGTH}" placeholder="Ask a question..." autocomplete="off" required></textarea>
        <button type="submit" aria-label="Send message">
          ${sendIcon()}
        </button>
      </form>
    </section>
    <button class="site-chat-toggle" type="button" aria-label="Open Codie" aria-expanded="false">
      <span class="site-chat-toggle-logo">${codieLogo()}</span>
      <span class="site-chat-toggle-close">${closeIcon()}</span>
    </button>
  `;

  document.body.appendChild(root);
  lucide.createIcons();

  const toggle = root.querySelector('.site-chat-toggle');
  const close = root.querySelector('.site-chat-close');
  const panel = root.querySelector('.site-chat-panel');
  const form = root.querySelector('.site-chat-form');
  const input = form.querySelector('textarea');
  const submitButton = form.querySelector('button[type="submit"]');
  const log = root.querySelector('.site-chat-log');
  const error = root.querySelector('.site-chat-error');
  const prompts = root.querySelectorAll('.site-chat-prompts button');
  const userId = localStorage.getItem('opencodie-chat-user') || crypto.randomUUID();
  let isSending = false;
  localStorage.setItem('opencodie-chat-user', userId);

  function setOpen(open) {
    root.classList.toggle('open', open);
    toggle.setAttribute('aria-label', open ? 'Close Codie' : 'Open Codie');
    toggle.setAttribute('aria-expanded', String(open));
    if (open) input.focus();
  }

  function renderMarkdown(text) {
    const raw = marked.parse(text, { breaks: true, gfm: true });
    return DOMPurify.sanitize(raw, { USE_PROFILES: { html: true } });
  }

  function addMessage(text, type) {
    const msg = document.createElement('div');
    msg.className = `site-chat-msg ${type}`;
    const isBot = type.includes('bot');
    const body = document.createElement('div');
    body.className = 'site-chat-msg-body';
    if (isBot) {
      body.innerHTML = renderMarkdown(text);
    } else {
      const p = document.createElement('p');
      p.textContent = text;
      body.appendChild(p);
    }
    msg.appendChild(body);
    log.appendChild(msg);
    log.scrollTop = log.scrollHeight;
    return msg;
  }

  function setMessage(el, text) {
    const isBot = el.classList.contains('bot');
    const body = el.querySelector('.site-chat-msg-body') || el;
    if (isBot) {
      body.innerHTML = renderMarkdown(text);
    } else {
      const p = body.querySelector('p') || body;
      p.textContent = text;
    }
  }

  function setSending(nextSending) {
    isSending = nextSending;
    input.disabled = nextSending;
    submitButton.disabled = nextSending || !input.value.trim();
    prompts.forEach(button => {
      button.disabled = nextSending;
    });
  }

  toggle.addEventListener('click', () => setOpen(!root.classList.contains('open')));
  close.addEventListener('click', () => setOpen(false));
  prompts.forEach(button => {
    button.addEventListener('click', () => {
      input.value = button.textContent.trim();
      form.requestSubmit();
    });
  });

  input.addEventListener('input', () => {
    submitButton.disabled = isSending || !input.value.trim();
  });

  input.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message) return;
    if (message.length > MAX_MESSAGE_LENGTH) {
      error.textContent = `Use ${MAX_MESSAGE_LENGTH} characters or fewer.`;
      error.hidden = false;
      return;
    }

    error.hidden = true;
    error.textContent = '';
    input.value = '';
    root.classList.add('has-conversation');
    addMessage(message, 'user');
    const pending = addMessage('Thinking...', 'bot pending');
    setSending(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, user_id: userId }),
      });

      if (!response.ok) throw new Error('Chat request failed');
      const data = await response.json();
      setMessage(pending, data.answer || 'No answer received.');
      pending.classList.remove('pending');
    } catch (error) {
      const errorMessage = 'Chat is unavailable right now.';
      root.querySelector('.site-chat-error').textContent = errorMessage;
      root.querySelector('.site-chat-error').hidden = false;
      setMessage(pending, errorMessage);
      pending.classList.remove('pending');
      pending.classList.add('error');
    } finally {
      setSending(false);
    }
  });

  submitButton.disabled = true;
})();
