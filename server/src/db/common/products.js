const products = [];

const image = '/uploads/19.jpg';
const imageWebp = '/uploads/19.webp';

const description = '<ul><li>EEDRA Cilantro Seeds - contains 300 seeds in 1 Pack and professional instructions created by PhD Helga George</li><li>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee</li><li>Cilantro common culinary uses: salsa, guacamole, pesto, salads, chutney, baked breads, pad thai, pico de gallo, rice, grilled shrimp skewers, falafel, and more</li><li>Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</li><li>SEEDRA customer service - please contact us directly through Amazon with any questions or concerns about our products. We care about each customer and do our best to provide you with 100% satisfaction</li></ul>';

const options = [
  { title: 'Package Dimensions', value: '5.51 x 3.5 x 0.35 inches' },
  { title: 'Item Weight', value: '0.317 ounces' },
  { title: 'ASIN', value: 'B08Z3HN5MP' }
];

const gallery = [
  { lg: '', sm: ''}
];

for (let i = 0; i < 24; i++) {
  const id = i + 1;
  const title = `SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting #${id}`;
  const price = Math.floor(Math.random() * 10) + 10;
  const priceOld = i % 5 === 0 ? price - 5 : null;
  const rating = Math.floor(Math.random() * 5) + 1;
  const ratingCount = rating + 25;
  const url = `/products/${id}`

  const product = {
    id,
    url,
    title,
    image,
    imageWebp,
    gallery,
    price,
    priceOld,
    rating,
    ratingCount,
    description,
    options
  }

  products.push(product);
}

module.exports = products;