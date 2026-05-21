(() => {
  const root = document.createElement('div');
  root.className = 'site-chat';
  root.innerHTML = `
    <button class="site-chat-toggle" type="button" aria-label="Open chat">
      <img src="images/opencodie-logo.png" alt="" />
    </button>
    <section class="site-chat-panel" aria-label="OpenCodie chat">
      <div class="site-chat-head">
        <div class="site-chat-brand">
          <img src="images/opencodie-logo.png" alt="" />
          <strong>Codie</strong>
        </div>
        <button class="site-chat-close" type="button" aria-label="Close chat">
          <span></span>
        </button>
      </div>
      <div class="site-chat-log">
        <div class="site-chat-msg bot">
          <p>Hi, I'm Codie. Ask me anything about your OpenCodie project - I'll help you build, fix, or move forward.</p>
          <time></time>
        </div>
      </div>
      <div class="site-chat-prompts">
        <button type="button">How do I create my first project in OpenCodie?</button>
        <button type="button">Where should I store API keys and environment variables?</button>
        <button type="button">How do I connect a custom domain to a deployment?</button>
      </div>
      <form class="site-chat-form">
        <input type="text" name="message" placeholder="Ask a question..." autocomplete="off" required />
        <button type="submit" aria-label="Send message">
          <i data-lucide="arrow-up"></i>
        </button>
      </form>
      <p class="site-chat-note">Codie can make mistakes. Review code, logs, and changes before applying or deploying.</p>
    </section>
  `;

  document.body.appendChild(root);
  lucide.createIcons();

  const toggle = root.querySelector('.site-chat-toggle');
  const close = root.querySelector('.site-chat-close');
  const panel = root.querySelector('.site-chat-panel');
  const form = root.querySelector('.site-chat-form');
  const input = form.querySelector('input');
  const log = root.querySelector('.site-chat-log');
  const prompts = root.querySelectorAll('.site-chat-prompts button');
  const introTime = root.querySelector('.site-chat-msg time');
  const userId = localStorage.getItem('opencodie-chat-user') || crypto.randomUUID();
  localStorage.setItem('opencodie-chat-user', userId);
  introTime.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  function setOpen(open) {
    root.classList.toggle('open', open);
    toggle.setAttribute('aria-label', open ? 'Close chat' : 'Open chat');
    if (open) input.focus();
  }

  function addMessage(text, type) {
    const msg = document.createElement('div');
    msg.className = `site-chat-msg ${type}`;
    const body = document.createElement('p');
    body.textContent = text;
    msg.appendChild(body);
    if (type.includes('bot')) {
      const time = document.createElement('time');
      time.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      msg.appendChild(time);
    }
    log.appendChild(msg);
    log.scrollTop = log.scrollHeight;
    return msg;
  }

  function setMessage(el, text) {
    const body = el.querySelector('p') || el;
    body.textContent = text;
  }

  toggle.addEventListener('click', () => setOpen(!root.classList.contains('open')));
  close.addEventListener('click', () => setOpen(false));
  prompts.forEach(button => {
    button.addEventListener('click', () => {
      input.value = button.textContent.trim();
      form.requestSubmit();
    });
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message) return;

    input.value = '';
    addMessage(message, 'user');
    const pending = addMessage('Thinking...', 'bot pending');

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
      setMessage(pending, 'Chat is unavailable right now.');
      pending.classList.remove('pending');
      pending.classList.add('error');
    }
  });
})();
