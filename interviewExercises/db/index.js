const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jpmc', {
  useMongoClient: true,
});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('mongo connected');
});

let bankSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  street: String,
  city: String,
  state: String,
  zipcode: Number,
  loc: {
    type: [Number],
    index: '2d'
  },
  latitude: Number,
  longitude: Number,
});

let Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;