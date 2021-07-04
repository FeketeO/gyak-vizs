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
