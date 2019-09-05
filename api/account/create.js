const Account = require('../../models/account/Account');

module.exports = async function(req, res, next) {
	const {email, name, age} = req.body;
	const account = new Account({email, name, age});
	try{
	await account.save();

	}catch(err){

			if (err.name === 'MongoError' && err.code === 11000) {
			  return res.send({ error: 'email already exists' });
			}
		
		res.send({message: err})
	}
	return res.send({message: 'success'});
};
