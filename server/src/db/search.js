const products = require('./common/products');

module.exports = {
  request: products,
  response: (items) => {
    return items;
  }
}