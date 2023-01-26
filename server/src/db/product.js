const products = require('./common/products');

module.exports = {
  request: products,
  response: (items) => {
    const [ item ] = items;
    let result = null;
    
    if (item) {
      result = {
        meta: {
          title: item.title
        },
        ...item,
        related: [...products.filter((v, i) => i < 3)]
      }
    }

    return result;
  }
}