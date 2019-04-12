let stock;

const url = SEARCH_URL;
const requestData = SEARCH_PARAMS;

const grid = document.querySelector('.grid');
const menu = document.querySelector('.menu');

fetch(url, {
  method: 'POST',
  body: JSON.stringify(requestData)
})
.then(response => response.json())
.then(data => {
  const products = data.records.map(v => v.allMeta);
  
  products.forEach(item => {
    const tile = document.createElement('product-tile');  

    const variant = item.visualVariant[0];

    const link = variant.nonvisualVariant[0].product_url || '#';

    tile.innerHTML = `<div slot="image"><a class="img-link" href="${CUST_URL}${link}"><img src="https:${variant.gbi_product_tiny_image_url}" ></a></div>`

    tile.setAttribute('class', 'tile');
    tile.setAttribute('name', item.title);
    tile.setAttribute('price', variant.nonvisualVariant[0].displayPrice);
  
    grid.append( tile );
  });

  const refinements = {};

  console.log(data.availableNavigation);

  for (let i = 0; i < 3; i++) {
    const title = data.availableNavigation[i].displayName;
    const refinement = data.availableNavigation[i].refinements.map(ref => ({ value: ref.value, count: ref.count }));

    refinements[title] = refinement;
  }

  const categories = Object.keys(refinements);

  const refinementMenu = document.createElement('refinement-menu');
  
  refinementMenu.setAttribute('categories', categories);
  refinementMenu.setAttribute('refinements', JSON.stringify(refinements));

  menu.append( refinementMenu );
});

// @todo This doesn't work
window.addEventListener('add-to-cart', function() {
  alert('added to cart');
});

