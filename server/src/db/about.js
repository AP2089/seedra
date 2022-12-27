const data = {
  meta: {
    title: 'Who we are and what we do'
  },
  title: 'Who we are and what we do',
  description: 'Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden',
  specification: {
    title: "Seedra helps to grow fast and efficiant",
    image: "/uploads/01.jpg",
    imageWebp: "/uploads/01.webp",
    description: "<p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p><p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee<br />Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p><p>Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>"
  },
  story: {
    title: 'Our story',
    description: '<p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p><p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p><p>Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>',
    image: "/uploads/14.jpg",
    imageWebp: "/uploads/14.webp",
  },
  team: {
    title: 'Meet our team',
    items: [
      { id: 1, name: 'Leslie Alexander', caption: 'Nursing Assistant', image: '/uploads/15.jpg', imageWebp: '/uploads/15.webp' },
      { id: 2, name: 'Robert Fox', caption: 'Dog Trainer', image: '/uploads/16.jpg', imageWebp: '/uploads/16.webp' },
      { id: 3, name: 'Floyd Miles', caption: 'Web Designer', image: '/uploads/17.jpg', imageWebp: '/uploads/17.webp' },
      { id: 4, name: 'Wade Warren', caption: 'Medical Assistant', image: '/uploads/18.jpg', imageWebp: '/uploads/18.webp' }
    ]
  }
}

const request = response = data;

module.exports = {
  request,
  response
}