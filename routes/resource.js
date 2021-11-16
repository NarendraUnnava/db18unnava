var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var gas_controller = require('../controllers/gas');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// gas ROUTES ///
// POST request for creating a gas.
router.post('/resource/gas', gas_controller.gas_create_post);
// DELETE request to delete gas.
router.delete('/resource/gas/:id', gas_controller.gas_delete);
// PUT request to update gas.
router.put('/resource/gas/:id', gas_controller.gas_update_put);
// GET request for one gas.
router.get('/resource/gas/:id', gas_controller.gas_detail);
// GET request for list of all gas items.
router.get('/resource/gas', gas_controller.gas_list);
module.exports = router;