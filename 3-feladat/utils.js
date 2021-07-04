
// A modul importok ugyanazok, mint az előző feladatban, a getListet is áthúzom, ahogy a jsonPath-et is. Update metódus kell nekem. A file olvasást ki kell egészíteni a file írásával, az listát ugyanúgy be kell olvasnom ahhoz,hogy frissíteni tudjam. Az első feladatlból az update alapot át tudom hívni, megvan a lista, kiolvasom a listát, update a listát, és mielőtt visszaadom, előtte írni kell JSON.stringify(list) Ez a feladat.
const fsp = require('fs').promises;
const { join } = require('path');

const jsonPath = join(__dirname, 'database', 'cars.json');

const getList = async () => {
    const content = await fsp.readFile(jsonPath, 'utf8');
    return JSON.parse(content);
};

const saveList = async (list = [])  => {
 await fsp.writeFile(jsonPath, JSON.stringify(list, null, 4), 'utf8')
//  null ha átalakítom az adatokat  fileba írás előtt, itt null, mert nem akarom. A 4 azt jelenti, hogy hány karakterrel húzza be
}

const update = async (entity = {}) => {
const list = await getList();

const index = list.findIndex( item => item.id === entity.id );
     list[index] = {...list[index], ...entity};

     await saveList(list);

     return list[index];
};



module.exports = Object.freeze({
    update
});

     
    //  azért nem list[index] = entity, mert akkor azok a property-k, amik nem lettek updatelve, eltűnnek, mert nem jöt rájuk update data. Ezért az adott entitást, ami kaptam, hozzáterítem az adott indexű elemHEZ, így csak azok frissülnek, amit megadtam

