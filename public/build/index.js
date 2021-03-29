
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
'use strict';

class HelloWorld extends HTMLElement {
  styles = `h1 { color: blue; }`;

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    const userName = this.getAttribute('userName');
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <h1>Hello ${userName || 'world'}!</h1>
      <slot>
    `;

    const button = document.createElement('button');
    button.innerText = 'Click me!';
    button.addEventListener('click', () => {
      const event = new CustomEvent('onClick');
      this.dispatchEvent(event);
    });

    this.shadowRoot.appendChild(button);
  }
}

customElements.define('aa-hello-world', HelloWorld);

module.exports = HelloWorld;
//# sourceMappingURL=index.js.map
