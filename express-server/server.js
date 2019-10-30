// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set our api routes
app.use('/', api);

const port = (process.env.PORT || 8000)
app.set('port', port);

// _Create HTTP server._
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));