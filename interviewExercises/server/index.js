const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Banks = require('../db/index.js');

const app = express();
app.use(bodyParser.json());

app.get('/banks', (req, res) => {
  Banks.find({}).limit(5).exec( (err, banks) => {
    if (err) {
      console.log( 'server get request failure', err);
    } else {
      console.log('Success!');
    }
    res.end(JSON.stringify(banks));
  });
});

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(`Example app listening on ${port}`);
});