const fsp = require('fs').promises
// fsp - így jelöljük, hogy ez a  promise-os fs, nem a "sima"
const { join } = require('path')
// ez ahhoz kell, hogy meg tudjam határozni a file útvonalát: const path = require('path), de mivel én most csak a join()-to fogom használni, elég lesz a const {} join } = requite('path')

const jsonPath = join(__dirname, 'database', 'cars.json')
// __dirname: az adott könyvtárban, ahol fut a NodeJS (2-feladat),  azon belül a database mappa, azon belül pedig a cars.json file. A path azt is látja,hogy windowson vagyok, vagy linuxon, tudja milyen //-ek kellenek, ilyenek.

// a file beolvasására is írunk egy függvényt:
const getList = async () => {
     const content = await fsp.readFile(jsonPath, 'utf-8') 
    //  --> ez lesz a "nyers" string a file-ból, majd az értelmezett tartalommal térek vissza a parse(): értelmezi a stringet, és a tömböt adja vissza: azt a tömböt, ami a  json file-ban található, tehát nem mint string ugyebár , hanem rendesen tömb --> objekutm, változó, stb
    return JSON.parse(content)
}
const get = async (id = 0) => {
    list = await getList()
    return list.find( item => item.id === id)
}


module.exports = Object.freeze({
    get
})
