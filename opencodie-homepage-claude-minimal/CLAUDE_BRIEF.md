# Claude brief

This is a compact copy of the OpenCodie homepage only.

Task:
- Add premium, high-end motion and scroll animations.
- Keep the current interface, layout, copy, colors, and brand style mostly intact.
- Treat this as an animation and polish pass, not a full redesign.

Good animation directions:
- Smooth section reveal animations while scrolling.
- Subtle parallax/depth in the hero and dashboard preview.
- Premium hover states and micro-interactions for buttons, cards, pricing blocks, FAQ rows, and logo pills.
- Scroll-triggered card movement that feels refined and not distracting.
- Keep performance reasonable.
- Respect `prefers-reduced-motion`.

Important:
- Do not rebuild the page in another framework.
- Do not remove the existing content.
- Do not change the product positioning or pricing structure.
- Keep the page usable on mobile and desktop.

Files:
- `index.html`: homepage markup.
- `css/styles.css`: homepage styles.
- `js/main.js`: interactions and animation logic.
- `js/chatbot.js`: floating chatbot widget.
- `images/`: only homepage images used by this page.

Suggested prompt:

```text
See this attached folder. It is the homepage of my platform. I want more movement and premium scrolling animations, like a high-end website. Please keep the interface mostly the same. Do not redesign the full page. Add subtle, polished motion: scroll reveals, parallax/depth in the hero, refined hover states, card animations, FAQ/pricing movement, and preserve mobile responsiveness and prefers-reduced-motion.
```
