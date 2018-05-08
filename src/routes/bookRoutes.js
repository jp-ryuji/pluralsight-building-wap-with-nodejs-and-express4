const express = require('express');

const bookRouter = express.Router();

function router(nav) {
  const books = [
    {
      title: 'War and Pease',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'Les Miserables',
      genre: 'Historical Fiction',
      author: 'Victor Hugo',
      read: true
    },
    {
      title: 'The Time Machine',
      genre: 'Science Fiction',
      author: 'H.G. Wells',
      read: true
    }
  ];

  bookRouter.route('/').get((req, res) => {
    res.render('books', { title: 'Library', books }, nav);
  });

  return bookRouter;
}

module.exports = router;
