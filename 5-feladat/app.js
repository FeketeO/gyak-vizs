const http = require('http');
const { router } = require('./router/carRouter');
const rouer = require('./router/carRouter')

const port = 8080;

const server = http.createServer( async (req, res) => {
  router[req.method.toLowerCase()](res);
// req.method-so rész: get, POST, PATC, DELETE kis betűssé alakítom, mert a routerben kis betűvel írtam be őket, és a rooter objeckutomból azt a függvényt hívom meg,aminek a neve megegyezik a http metódussal

});
 
  
server.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}`);
})