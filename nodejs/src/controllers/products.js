const router = require('express').Router();
const productService = require('../services/productService');

router.get('/', (req, res) => {
	let products = productService.getAll();
	res.render('products/index.html', {products});
});

router.get('/:id', (req, res) => {
	let product = productService.getById(req.params.id);
	res.render('products/product.html', {product});
});

module.exports = router;