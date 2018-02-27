const productDao = require('../dao/productDao');

let getAll = () => {
	return productDao.getAll();
};

let getById = (id) => {
	return productDao.getAll().find(value => value._id === id);
};

module.exports = { getAll, getById };