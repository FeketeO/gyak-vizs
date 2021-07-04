const db = require('../database/db');

const getAll = async () => {
    await db.getAll()
}
const get = async (id) => {
    await db.get(id)
}
const create = async (entity) => {
    await db.create(entity)
}
const update = async (entity) => {
    await db.update(entity)
}
const remove = async (id) => {
    await db.remove(id)
}

const count = async () => {
    const list = await db.getAll();
    return list.length;
    // a controllerben lehetnek olyan dolgok,amik aggregációtm vizsgálatot, validációt végeznek, tehát az adatbázissal nem csinálnak semmi. Mint pl a fennebb lévő count(). Ezért kell a controller, és ezért nem hívjuk meg egyből a db-ből a függvényeket.
module.exports = Object.freeze({
getAll,
get,
create,
update,
remove
})