const router = require('express').Router();
const contactService = require('../services/contactService');

router.get('/', (req, res) => {
	res.render('contact/index.html');
});

router.post('/', (req, res) => {
	contactService.processContact(req.body)
		.then(
			() => res.render('contact/submitted.html'),
			(error) => res.render('error.html', error)
		);
});

module.exports = router;