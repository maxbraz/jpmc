const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('mongo connected');
});

let bankSchema = mongoose.Schema({
  Id: { type: Number, unique: true },
  Name: String,
  Street: String,
  City: String,
  State: String,
  Zipcode: Number,
});

let Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;