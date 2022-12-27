const articles = require('./common/articles');

const data = {
  meta: {
    title: 'Блог'
  },
  title: 'Welcome to our blog',
  description: 'Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden'
}

module.exports = {
  request: articles,
  response: (items) => {
    return {
      ...data,
      items
    };
  }
}