let stock;

const url = `https://freepeople-cors.groupbycloud.com/api/v1/search`;
const requestData = {
  area: 'Production',
  collection: 'fpProdBrowse2ChildRecord',
  query: '',
  fields: "*"
}
const grid = document.querySelector('.grid');

fetch(url, {
  method: 'POST',
  body: JSON.stringify(requestData)
})
.then(response => response.json())
.then(data => {
  const products = data.records.map(v => v.allMeta);
  
  products.forEach(item => {
    const tile = document.createElement('my-tile', {is: 'div'});
    const variant = item.visualVariant[0];

    console.log(variant);

    tile.setAttribute('name', item.title);
    tile.setAttribute('image', variant.gbi_product_tiny_image_url);
    tile.setAttribute('price', variant.nonvisualVariant[0].displayPrice);
    // // tile.setAttribute('price', item.price);
  
    grid.append( tile )
  });
});

