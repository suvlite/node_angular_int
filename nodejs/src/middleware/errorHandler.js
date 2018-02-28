dev = function (err, req, res, next) {
	res.status(err.status || 500);
	console.error(err);
	res.render('error.html', {
		message: err.message,
		error: err
	});
};

prod = function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error.html', {
		message: err.message,
		error: {}
	});
};

module.exports = {
	dev,
	prod
};