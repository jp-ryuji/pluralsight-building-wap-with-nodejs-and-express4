const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('tiny')); // 'combined' shows more informatoin.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/')));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views/');
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('index', {
    nav: [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }],
    title: 'Library'
  });
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
