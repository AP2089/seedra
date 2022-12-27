const articles = require('./common/articles');

module.exports = {
  request: articles,
  response: (items) => {
    const [ item ] = items;
    let result = null;

    if (item) {
      const { title, date, content } = item;

      result = {
        meta: {
          title
        },
        title,
        date,
        content
      }
    }

    return result;
  }
}