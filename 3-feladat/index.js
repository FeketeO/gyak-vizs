const { update } = require('./utils');

( async () => {
  console.log( await update({
    "id": 5,
    "model": "Savannah",
    "color": "Purple",
    "price": 15000
}
) );
})();

  // // ha így futtatom le : console.log(get(4));, akkor Promise { <pending> } lesz az eredmény, mivel a get egy promise-t ad vissza, így meg kellene várnom a clg-vel, míg a promise visszaadja az adatot, és csak akkor kellene logolnom --> await kellene valahova, de az meg csak async függvényben fut, így csinálok egy névtelen async IIFE függvényt, és azt hívom meg, és abba tesze, bele ezt a parancsot.
