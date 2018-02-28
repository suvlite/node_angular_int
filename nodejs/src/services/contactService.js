let Q = require('q');

let processContact = function (form) {
	let deferred = Q.defer();

	//Simulate async call
	console.info(form);
	deferred.resolve('ok');

	return deferred.promise;
};

module.exports = { processContact };