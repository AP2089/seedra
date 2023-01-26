const products = require('./common/products');

const data = {
  meta: {
    title: 'Cart'
  }
}

module.exports = {
  request: products,
  response: (items) => {
    return {
      ...data,
      items
    };
  }
}