customElements.define('list-select', class extends Base {
    static get observedAttributes() { 
        return ['id', 'name', 'price', 'category', 'addToCart', 'image'];
    } 

    constructor(props) {
        super(props);
        this.template = document.getElementById('product-tile').content;
    }

    init() {
        console.log('list', this.price, this.category);
    }
});