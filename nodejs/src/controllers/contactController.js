const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('contact/index.html');
});

module.exports = router;