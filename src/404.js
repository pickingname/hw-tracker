// Server-side code example using Node.js and Express.js

const express = require('express');
const app = express();

// Route for handling invalid requests
app.use((req, res, next) => {
  res.status(404).sendFile('404.html', { root: __dirname });
});