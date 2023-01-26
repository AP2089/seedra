const products = require('./common/products');
const articles = require('./common/articles');

const data = {
  meta: {
    title: 'Главная'
  },
  specification: {
    title: "Seedra helps to grow fast and efficiant",
    image: "/uploads/01.jpg",
    imageWebp: "/uploads/01.webp",
    description: "<p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p><p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee<br />Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p><p>Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>"
  },
  reviews: {
    title: "What out clients say",
    items: [
      { id: 1, title: "Carla Samantoes-Diego", description: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season.", date: "12.09.2021", rating: 4, image: "/uploads/02.jpg", imageWebp: "/uploads/02.webp" },
      { id: 2, title: "Carla Samantoes-Diego 2", description: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested.", date: "11.08.2021", rating: 3, image: "/uploads/02.jpg", imageWebp: "/uploads/02.webp" },
      { id: 3, title: "Carla Samantoes-Diego 3", description: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions.", date: "01.07.2021", rating: 5, image: "/uploads/02.jpg", imageWebp: "/uploads/02.webp" },
      { id: 4, title: "Carla Samantoes-Diego 4", description: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George.", date: "04.06.2021", rating: 3, image: "/uploads/02.jpg", imageWebp: "/uploads/02.webp" },
      { id: 5, title: "Carla Samantoes-Diego 5", description: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom.", date: "10.06.2021", rating: 5, image: "/uploads/02.jpg", imageWebp: "/uploads/02.webp" },
    ]
  },
  bannerMain: {
    title: 'SEEDRA Basil Seeds for Indoor and Outdoor Planting',
    description: 'Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee',
    price: '12.56',
    oldPrice: '15.56',
    image: '/uploads/03.png',
    imageWebp: '/uploads/03.webp',
    url: '/product/1'
  },
  bannerExtra: {
    title: 'We sell seeds',
    description: 'that always sprout and gardening supplies which never break'
  },
  blog: articles.slice(0, 4),
  products: products.slice(0, 6)
}

const request = response = data;

module.exports = {
  request,
  response
}