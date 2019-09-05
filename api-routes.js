
let router = require('express').Router();


var contactController = require('./api/contactController');

router.route('/')
    .post(contactController.new);

router.route('/:contact_id')
    .get(contactController.view)


module.exports = router;