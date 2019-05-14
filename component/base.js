class Base extends HTMLElement {
  static get observedAttributes() { 
    return [];
  }
  
  constructor(props) {
    super();

    Object.keys(this.attributes).forEach(attribute => {
      this[attribute] = this.attributes[attribute].value;
    });
  }

  connectedCallback() {
    this.init();
    this.attachShadow({mode: 'open'}).appendChild(this.template.cloneNode(true));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.onUpdate();
  }
  
  // ty Ryan!
  prop(target) {
    const prop = this.getAttribute(target);
    if(typeof prop === "string") {
      if(prop.substr(0,1) === "[" || prop.substr(0,1) === "{") {
        return JSON.parse(prop) || null;
      }
    }
    return prop || null;
  }

  init() { }
  
  onUpdate() { }

  setStyle() {
    const newStyle = document.createElement('style');
    const newStyleContent = document.createTextNode(this.stylesheet);
    newStyle.appendChild(newStyleContent);

    // Build a reference to the existing node to be replaced
    const oldStyle = this.querySelector('style') || false;

    // Replace existing style node with the new style node
    if (oldStyle) {
      this.replaceChild(newStyle, oldStyle);
    } else {
      this.prepend(newStyle);
    }
  }
}