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
      group: 'category',
      selected: false,
      options: [
        { id: 1, name: 'Bundles', checked: false },
        { id: 2, name: 'Herbs', checked: false },
        { id: 3, name: 'Vegetables', checked: false },
        { id: 4, name: 'Fruits', checked: false },
        { id: 5, name: 'Supplies', checked: false },
        { id: 6, name: 'Flowers', checked: false }
      ]
    },
    {
      id: 2,
      title: 'Seed type',
      type: 'checkbox',
      group: 'seedType',
      selected: false,
      options: [
        { id: 1, name: 'Hybrid', checked: false },
        { id: 2, name: 'Open Pollinated', checked: false },
        { id: 3, name: 'Organic Seeds, Plants, and Supplies', checked: false },
        { id: 4, name: 'Pelleted See', checked: false }
      ]
    },
    {
      id: 3,
      title: 'Price',
      type: 'range',
      group: 'price_lte',
      selected: false,
      from: 0,
      to: 0
    }
  ]
}

module.exports = {
  request: products,
  response: (items) => {
    const prices = items.map(item => item.price);
    const priceMin = prices.length > 0 ? Math.min(...prices) : 0;
    const priceMax = prices.length > 0 ? Math.max(...prices) : 0;   

    for (key in data) {
      if (key === 'filter') {
        data.filter.map(item => {
          if (item.group === 'price_lte') {
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