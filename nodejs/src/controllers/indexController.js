const router = require('express').Router();
let products = require('./productController');
let contact = require('./contactController');

router.use('/products', products);
router.use('/contact', contact);

router.get('/', (req, res) => {
	res.render('home/index.html');
});

module.exports = router;