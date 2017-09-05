const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const parser = require('parse-address');
const zipcodes = require('zipcodes');
const Bank = require('../db/index.js');
const findLocation = require('./middleware/findLocation.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../client/dist')));

app.post('/address', (req, res) => {
  let parsedLocation = parser.parseLocation(req.body.address);
  let detailedAddress = zipcodes.lookup(parsedLocation.zip);
  let coordinates = {
    latitude: detailedAddress.latitude,
    longitude: detailedAddress.longitude,
  };

  res.send(JSON.stringify(coordinates));
});

app.get('/banks', (req, res) => {
  console.log('this is the req.query: ', req.query);

  // let maxDistance = 7;
  // maxDistance /= 6371;

  let coordinates = [];
  coordinates[0] = req.query.longitude || -82.997928;
  coordinates[1] = req.query.latitude || 40.151287;

  // Bank.find({
  //   loc: {
  //     $near: {
  //       $geometry: {
  //         type: 'Point',
  //         coordinates: coordinates,
  //       },
  //     }
  //   }
  // }).limit(5).exec(function(err, banks) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   res.end(JSON.stringify(banks));
  // });
  Bank.find({}).limit(5).exec( (err, banks) => {
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