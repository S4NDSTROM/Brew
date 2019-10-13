const express = require('express');
const { databaseConnect, pool } = require('../db');
const path = require('path');

const app = express();

databaseConnect();

app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));

app.get('/test', async (req, res) => {
  let result = '';
  await pool
    .query('SELECT * from testpenis')
    .then((res) => (result = res.rows[0]))
    .catch(console.error);
  res.send(result);
  console.log(result);
});

console.log('hello');

module.exports = app;
