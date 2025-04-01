const axios = require('axios');
const fs = require('fs');

axios.get('https://fakestoreapi.com/products')
  .then(response => {
    fs.writeFileSync('products.json', JSON.stringify(response.data, null, 2));
    console.log('Data saved to products.json');
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });