
let router = require('express').Router();


var contactController = require('./api/contactController');

router.route('/')
    .post(contactController.new);



module.exports = router;