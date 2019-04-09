class Base extends HTMLElement {
    constructor() {
        super();

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

    render() {
        this.innerHTML = this.template;
        this.setStyle();
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