'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core.server.controller');
	app.route('/').get(core.index);
	app.route('/jquerytest').get(core.jquerytest);
	app.route('/getdseData').get(core.dseprocess );


};