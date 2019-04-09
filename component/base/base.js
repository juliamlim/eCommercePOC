class Base extends HTMLElement {
  constructor(props) {
    super();

      if(props) {
        Object.keys(props).forEach(item => {
          console.log('ola');
          this.setAttribute(item, props[item]);
        });
      }

      this.template = '';
      this.stylesheet = '';
    }

    connectedCallback() {
      this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      this[name] = newValue;
      this.render();
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

    beforeRender() {}

    render() {
      this.beforeRender();
      this.innerHTML = this.template;
      // this.setStyle  ();
    }

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