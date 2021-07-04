
// készíts egy olyan függvényt,mely az összes elemétvisszaadja a tömbnek, tehát beolvassa a file-t a file rendszerből, neve legyen getAll. A meglévőhozzávalókat át kehet húzni az előzőből.

// ennyi lesz megadva const getAll = async () => { 23.sorban lesz

// }

const fsp = require('fs').promises;
const { join } = require('path');

const jsonPath = join(__dirname, 'database', 'cars.json');

const getList = async () => {
    const content = await fsp.readFile(jsonPath, 'utf8');
    return JSON.parse(content);
};

const saveList = async (list = [])  => {
 await fsp.writeFile(jsonPath, JSON.stringify(list, null, 4), 'utf8')
}

// const gupdate = async (entity = {}) => üres lesz (), mert az összeset visszaadjuk
    const getAll = async () => {
return await getList();

};



module.exports = Object.freeze({
    getAll
});

     
