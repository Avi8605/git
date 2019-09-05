

const Contact = require('../models/contactModel');

exports.new = function (req, res) {
    const contact = new Contact();
    contact.name = req.body.name;
    contact.color = req.body.color;

    contact.save(function (err) {
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New contact created!',
                data: contact
            });
    });
};