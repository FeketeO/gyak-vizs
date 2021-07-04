dbjs


// ez hivatott kommunikálni a vele egy mappában lévő cars.json-el. Az adatbázis műveletek vannak itt.

const fsp = require('fs').promises;
const { join } = require('path');

const jsonPath = join('./cars.json');

const getList = async () => {
    const content = await fsp.readFile(jsonPath, 'utf8');
    return JSON.parse(content);
};

const saveList = async (list = [])  => {
 await fsp.writeFile(jsonPath, JSON.stringify(list, null, 4), 'utf8')
};

    const getAll = async () => {
return await getList();

};

const get = async (id = 0) => {
    const list = await getList()
    return list.find( item => item.id === id);
};

const create = async (entity = { }) => {
    const list = await getList();
    const id = list[list.length - 1].id + 1;
    const newEntity = {...entity, id: id};
    list.push( newEntity );

    await saveList(list);

    return newEntity;
 };

 const update = async (entity = {}) => {
    const list = await getList();
    
    const index = list.findIndex( item => item.id === entity.id );
         list[index] = {...list[index], ...entity};
    
         await saveList(list);
    
         return list[index];
    };

    const remove = async (id = 0) => {
        const list = await getList()
        if (list.length < 1 || !id) {
            return false
        }
        const index = list.findIndex( item => item.id === id);

        list.splice(index, 1);

        await saveList(list);
    
         return true;

    };

module.exports = Object.freeze({
    getAll,
    get,
    create,
    update,
    remove
});

     
app.js

const http = require('http');
const { router } = require('./router/carRouter');


const port = 8080;

const server = http.createServer( async (req, res) => {
  router[req.method.toLowerCase()](res);
// req.method-so rész: get, POST, PATC, DELETE kis betűssé alakítom, mert a routerben kis betűvel írtam be őket, és a rooter objeckutomból azt a függvényt hívom meg,aminek a neve megegyezik a http metódussal

});
 
  
server.listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}`);
});

carRouter

const { carController } = require('../controller/carController');

const router =  {
    'get': async (res) => res.end( JSON.stringify( await carController.getAll() )),
};

module.exports = Object.freeze({
    router
})

car controlle


const db = require('../database/db');

const getAll = async () =>  await db.getAll();
const get = async (id) => await db.get(id);
const create = async (entity) => await db.create(entity);
const update = async (entity) => await db.update(entity);
const remove = async (id) => await db.remove(id);

const count = async () => {
    const list = await db.getAll();
    return list.length;
};
    // a controllerben lehetnek olyan dolgok,amik aggregációtm vizsgálatot, validációt végeznek, tehát az adatbázissal nem csinálnak semmi. Mint pl a fennebb lévő count(). Ezért kell a controller, és ezért nem hívjuk meg egyből a db-ből a függvényeket.
module.exports = Object.freeze({
getAll,
get,
create,
update,
remove
});