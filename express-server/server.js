// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var cors = require('cors');

// Get our API routes
const api = require('./routes/api');

const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Parsers for POST data

// Set our api routes
app.use('/', api);

const port = (process.env.PORT || 8000)
app.set('port', port);

// _Create HTTP server._
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));