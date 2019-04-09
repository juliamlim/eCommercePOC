let stock;

fetch("https://my.api.mockaroo.com/fake_products.json", {
  headers: {
    "X-API-Key": "44f77fe0" 
  }
}).then(res => res.json())
.then(list => {
    const grid = document.querySelector('.grid');
    list.forEach(item => {
        const tile = document.createElement('my-tile');
        tile.setAttribute('name', item.name);
        tile.setAttribute('price', item.price);
        // Object.keys(item).forEach(v => tile.setAttribute(v, item[v]));
        grid.appendChild(tile);
    });
});

