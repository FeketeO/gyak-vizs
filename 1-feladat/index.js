const {get, create, update, remove} = require('./utils')

const cars = [{
    "id": 1,
    "model": "Express 2500",
    "maker": "Chevrolet",
    "year": 1997,
    "color": "Violet",
    "price": 407897
  }, {
    "id": 2,
    "model": "Ghost",
    "maker": "Rolls-Royce",
    "year": 2010,
    "color": "Mauv",
    "price": 183620
  }, {
    "id": 3,
    "model": "Milan",
    "maker": "Mercury",
    "year": 2011,
    "color": "Green",
    "price": 468477
  }, {
    "id": 4,
    "model": "Thunderbird",
    "maker": "Ford",
    "year": 2004,
    "color": "Goldenrod",
    "price": 327875
  }, {
    "id": 5,
    "model": "Echo",
    "maker": "Toyota",
    "year": 2002,
    "color": "Fuscia",
    "price": 263106
  }, {
    "id": 6,
    "model": "Pilot",
    "maker": "Honda",
    "year": 2003,
    "color": "Fuscia",
    "price": 440661
  }, {
    "id": 7,
    "model": "Ion",
    "maker": "Saturn",
    "year": 2006,
    "color": "Violet",
    "price": 256889
  }, {
    "id": 8,
    "model": "1500",
    "maker": "Chevrolet",
    "year": 1999,
    "color": "Indigo",
    "price": 213894
  }, {
    "id": 9,
    "model": "Armada",
    "maker": "Nissan",
    "year": 2010,
    "color": "Aquamarine",
    "price": 486341
  }, {
    "id": 10,
    "model": "XC60",
    "maker": "Volvo",
    "year": 2011,
    "color": "Crimson",
    "price": 195500
  }]

  console.log(get(cars, 4));
  console.log(create(cars, {
    "model": "Tundra",
    "maker": "Toyota",
    "year": 2017,
    "color": "Black",
    "price": 30000
  }
  ));
  console.log(update(cars, {
    "id": 7,
    "model": "Venus",
    "maker": "Saturn",
    "year": 2010,
    "color": "Red",
    "price": 15000
  }
  ));
  console.log(remove(cars, 9));

  console.log(cars);