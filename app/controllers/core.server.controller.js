'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
};
exports.jquerytest = function(req, res) {
	res.render('jquerytest', {
		user: req.user || null,
		request: req
	});
};

