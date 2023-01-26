const meta = require('./meta');
const home = require('./home');
const blog = require('./blog');
const article = require('./article');
const terms = require('./terms');
const privacy = require('./privacy');
const about = require('./about');
const contacts = require('./contacts');
const message = require('./message');
const catalog = require('./catalog');
const favorites = require('./favorites');
const product = require('./product');
const cart = require('./cart');
const order = require('./order');
const search = require('./search');

const data = {
  meta,
  home,
  blog,
  article,
  terms,
  privacy,
  about,
  contacts,
  message,
  catalog,
  favorites,
  product,
  cart,
  order,
  search
}

const request = {};
const response = {};

for (const key in data) {
  request[key] = data[key].request;
  response[key] = data[key].response;
}

module.exports = {
  request,
  response
}