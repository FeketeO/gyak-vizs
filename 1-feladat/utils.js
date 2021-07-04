const get = (list = [], id = 0) => {
    return list.find( item => item.id === id)
}

const create = (list = [], entity = { }) => {
   const id = list[list.length - 1].id + 1
   const newEntity = {...entity, id: id} 
   list.push( newEntity )
   return newEntity
}

const update = (list = [], entity = {}) => {
    if (list.length < 1 || !entity.id) {
    return false
    } 
     const index = list.findIndex( item => item.id === entity.id )
     list[index] = {...list[index], ...entity}
    //  azért nem list[index] = entity, mert akkor azok a property-k, amik nem lettek updatelve, eltűnnek, mert nem jöt rájuk update data. Ezért az adott entitást, ami kaptam, hozzáterítem az adott indexű elemHEZ, így csak azok frissülnek, amit megadtam

    return list[index]
}

const remove = (list = [], id = 0) => {
   if (list.length < 1 || !id) {
       return false
   }
   const index = list.findIndex( item => item.id === id)
   list.splice(index, 1)
//    Az adott indexű elemnél egy darabot kivágok belőle. 
// A filterrel megkeresem, hogy melyik az, és minden, ami nem az. A findIndex esetében, ha megtaálja az adott indexű elemet, akkor nem megy tovább, viszont mindegyikre lefuttatja a vizsgálatot, akkor is ha 23243253465745 elem van, így az findIndex talán gyorsabb. ÉS a filetr nem írja felül az adott tömböt, így egy felülírt listával kell visszajönni. Szóval,ez jobb
return true
}

module.exports = Object.freeze({
    get,
    create,
    update,
    remove
})
