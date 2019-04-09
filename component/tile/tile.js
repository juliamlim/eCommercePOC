customElements.define('my-tile', class extends Base {
  static get observedAttributes() {
    return ['id', 'name', 'price', 'stock', 'variant', 'image'];
  }    

  constructor(props) {
    super(props);
  }
  
  beforeRender() {
    this.name = this.prop('name');
    this.image = this.prop('image');
    this.variants = this.prop('variants');
    // this.price = this.prop('price');
    this.template = `<img src="https:${this.image}" /><h1>${this.name}</h1><p>$${this.price}</p>`;
  }
});