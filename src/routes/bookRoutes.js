const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:bookRoutes');

const bookRouter = express.Router();

function router(_nav) {
  bookRouter.route('/').get((req, res) => {
    const url = 'mongodb://localhost:27017';
    const dbName = 'libraryApp';

    (async function mongo() {
      let client;
      try {
        client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const books = await db
          .collection('books')
          .find()
          .toArray();
        res.json(books);
      } catch (err) {
        debug(err.stack);
      }

      client.close();
    })();
  });

  return bookRouter;
}

module.exports = router;
