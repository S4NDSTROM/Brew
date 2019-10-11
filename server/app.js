const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.send({ test: 'Hello Penis!' });
  console.log('kuk');
});

console.log('hello');

module.exports = app;
