

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
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            data: contact
        });
    });
};
