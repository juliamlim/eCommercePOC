customElements.define('refinement-menu', class extends Base {
  // @todo How to dynamically add and alter these so clients can add and access their own defined props
  static get observedAttributes() { 
    return ['categories', 'refinements'];
  }

  init() {
    const categories = this.categories.split(',');
    const refinements = JSON.parse(this.refinements);
  
    console.log(refinements);

    this.template = document.createRange().createContextualFragment(`
      <h3><slot name="title">Refine</slot></h3>
      <nav class="menu">
        ${ 
          categories.map(category => `
            <h5>${category}</h5>  
            <ul>
              ${
                // @todo How do we turn this into a slot and persist the variables (is this something we even want to do)?
                refinements[category].map(refinement => `<li>${refinement.value} (${refinement.count})</li>`).join('')
              }
            </ul>
          `).join('')
        }
      </nav>`);
  }
});