customElements.define('my-tile', class extends Base {
    static get observedAttributes() {
        return ['id', 'name', 'price', 'stock', 'variant', 'image'];
    }    

    constructor() {
        super();
        // // this.template = `<h1>${this.getAttribute('name')}</h1><p>${this.getAttribute('price')}</p><img src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}">`;
        // this.style = 'h1 { color: blue; }';

        // this.appendChild( document.createElement('p') );
        // this .innerHTML = 'booag &nbsp;';
        // this.name = this.getAttribute('name');
        // this.price = this.getAttribute('price');

        console.log(this.observedAttributes);
        this.template = `<h1>${this.name}</h1><p>${this.price}</p>`;
    }

    // connectedCallback() {
    //     this.innerHTML = this.template;
    // }
});