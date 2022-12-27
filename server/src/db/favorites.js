const products = require('./common/products');

const data = {
  meta: {
    title: 'Favorites'
  },
  title: 'Favorites'
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