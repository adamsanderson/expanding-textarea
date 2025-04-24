export class ExpandingTextArea extends HTMLElement {
  static formAssociated = true;

  #internals: ElementInternals;
  #value = "";
  #placeholder = "";
  #placeholderEl!: HTMLElement;
  #inputEl!: HTMLElement;

  get value() {
    return this.#value;
  }

  set value(newValue: string) {
    if (newValue !== this.#value) {
      this.#value = newValue
      this.#internals.setFormValue(this.#value)

      if (newValue !== this.#inputEl.textContent) {
        this.#inputEl.textContent = newValue;
      }

      if (this.#value.length === 0) {
        this.#placeholderEl.style.display = 'block';
      } else {
        this.#placeholderEl.style.display = 'none';
      }
    }
  }

  get placeholder() {
    return this.#placeholder;
  }

  set placeholder(newPlaceholder: string) {
    this.#placeholder = newPlaceholder;
    this.#placeholderEl.textContent = newPlaceholder;
    this.#internals.ariaPlaceholder = newPlaceholder;
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed", delegatesFocus: true });

    const placeholder = this.#placeholderEl = document.createElement('div');
    placeholder.setAttribute('part', 'placeholder');
    shadow.appendChild(placeholder);

    const input = this.#inputEl = document.createElement('div');
    input.setAttribute('part', 'input');
    input.setAttribute('contenteditable', 'plaintext-only');
    shadow.appendChild(input);

    this.#internals.role = 'textbox';
    this.#internals.ariaMultiLine = 'true';

    this.placeholder = this.getAttribute('placeholder') || '';

    this.value = this.textContent || '';
    const syncDomToValue = () => this.value = input.textContent || "";

    // Observe contenteditable changes
    this.addEventListener('input', () => syncDomToValue());

    // Mimic textarea change events
    let previousValue: string | undefined = undefined;
    this.addEventListener('focus', () => previousValue = this.#value);
    this.addEventListener('blur', () => {
      if (previousValue !== this.#value) {
        this.dispatchEvent(new Event('change', {
          bubbles: true,
        }));
      }
    });

    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: block;
        background: Field;
      }

      :host(:focus) {
        outline: 3px auto Highlight;
        outline: auto 3px -webkit-focus-ring-color;
      }

      :host::part(placeholder) {
        white-space: pre-wrap;
      }

      :host::part(input):focus {
        outline: none;
      }

      :host::part(placeholder) {
        position: absolute;
        pointer-events: none;
        color: GrayText;
        content: host()[aria-placeholder];
      }
    `;

    shadow.appendChild(style);
  }
}

customElements.define("expanding-textarea", ExpandingTextArea);