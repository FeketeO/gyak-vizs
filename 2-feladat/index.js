const { get } = require('./utils')

// ha így futtatom le : console.log(get(4));, akkor Promise { <pending> } lesz az eredmény, mivel a get egy promise-t ad vissza, így meg kellene várnom a clg-vel, míg a promise visszaadja az adatot, és csak akkor kellene logolnom --> await kellene valahova, de az meg csak async függvényben fut, így csinálok egy névtelen async IIFE függvényt, és azt hívom meg, és abba tesze, bele ezt a parancsot.


  ( async () => {
    console.log( await get(4) )
  })()
  