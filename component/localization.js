customElements.define('localization-select', class extends Base {
    constructor(props) {
      super(props);
      this.changeLanguage = this.changeLanguage.bind(this);
      // this.template = document.getElementById('product-tile').content;
      this.template = document.createRange().createContextualFragment(`
        <select onchange="${this.changeLanguage()}">
            <option>EN</option>
            <option>FR</option>
        </select>
        <label>Language</label>
      `);
    }
  
    init() {
      console.log(this.one);
      // document.querySelector('select#language_selector').addEventListener('onchange', this.changeLanguage);
    }
    
    // @todo This doesn't work
    changeLanguage(e) { 
      console.log(e);
      this.dispatchEvent( new Event('change-language') );
    }
  });