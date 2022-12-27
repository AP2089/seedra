const products = require('./common/products');

const data = {
  meta: {
    title: 'Catalog'
  },
  filter: [
    {
      id: 1,
      title: 'Category',
      type: 'checkbox',
      options: [
        { id: 1, name: 'Bundles' },
        { id: 2, name: 'Herbs' },
        { id: 3, name: 'Vegetables' },
        { id: 4, name: 'Fruits' },
        { id: 5, name: 'Supplies' },
        { id: 6, name: 'Flowers' }
      ]
    },
    {
      id: 2,
      title: 'Seed type',
      type: 'checkbox',
      options: [
        { id: 1, name: 'Hybrid' },
        { id: 2, name: 'Open Pollinated' },
        { id: 3, name: 'Organic Seeds, Plants, and Supplies' },
        { id: 4, name: 'Pelleted See' }
      ]
    },
    {
      id: 3,
      title: 'Price',
      type: 'slider',
      from: null,
      to: null
    }
  ]
}

module.exports = {
  request: products,
  response: (items) => {
    const prices = items.map(item => item.price);
    const priceMin = Math.min(...prices);
    const priceMax = Math.max(...prices);

    for (key in data) {
      if (key === 'filter') {
        data.filter.map(item => {
          if (item.title && item.title.toLocaleLowerCase() === 'price') {
            item.from = priceMin;
            item.to = priceMax;
          }

          return item;
        })
      }
    }
    
    return {
      ...data,
      items
    };
  }
}