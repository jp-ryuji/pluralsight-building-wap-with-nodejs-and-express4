const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from my app');
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
