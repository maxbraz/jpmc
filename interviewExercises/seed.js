let Bank = require('./db/index.js');
let banks = require('./data.json');

for (let bank of banks) {
  let banko = new Bank({
    name: bank.name,
    street: bank.street,
    city: bank.city,
    state: bank.state,
    zipcode: bank.zipcode,
    latitude: bank.latitude,
    longitude: bank.longitude,
  });
  banko.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('successfully seeded bank');
    }
  });
}