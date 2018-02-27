const router = require('express').Router();
let products = require('./products');
let contact = require('./contact');

router.use('/products', products);
router.use('/contact', contact);

router.get('/', (req, res) => {
	res.render('home/index.html');
});

module.exports = router;