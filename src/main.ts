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










export default HelloWorld;