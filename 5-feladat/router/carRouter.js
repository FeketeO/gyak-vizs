const carController = require('../controller/carController');

const router =  {
    'get': (id = 0) => !id
    ? await carController.getAll
    : await carController.get(id)
}