customElements.define('product-tile', class extends Base {
  // @todo How to dynamically add and alter these so clients can add and access their own defined props
  static get observedAttributes() { 
    return ['id', 'name', 'price', 'category', 'addToCart', 'image'];
  }    

  constructor(props) {
    super(props);
    this.template = document.getElementById('product-tile').content;
    // this.template = document.createRange().createContextualFragment(`
    // <slot name="image"><img src="" alt=""></slot>
    // <slot name="info">
    //   <h2 class="title"></h2>
    //   <p class="price"></p>
    // </slot>
    // <slot name="atc">
    //   <button class="atc">Add to Cart</button>
    // </slot>
    // `);
  }

  init() {
    const img = this.template.querySelector('img');

    img.setAttribute('src', this.image);
    img.setAttribute('alt', this.name);
    
    this.template.querySelector('.title').textContent = this.name;
    this.template.querySelector('.price').textContent = `$${this.price}`;

    this.addToCart = this.addToCart.bind(this);

    this.template.querySelector('button').addEventListener('click', this.addToCart);
  }
  
  // @todo This doesn't work
  addToCart() { 
    this.dispatchEvent( new Event('add-to-cart') );
  }
});