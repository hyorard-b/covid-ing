const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const process = require('process');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

module.exports = app;
