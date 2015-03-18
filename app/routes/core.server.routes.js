'use strict';

module.exports = function(app) {
    // Root routing
    var core = require('../../app/controllers/core.server.controller');
    var users = require('../../app/controllers/users.server.controller');
    app.route('/').get(core.index);
    app.route('/jquerytest').get(core.jquerytest);
    app.route('/getdseData').get(core.dseprocess);
    app.route('/getdsedailyData').get(core.dsedaily);
    app.route('/getmystocks').get(users.requiresLogin, core.mystocks);


};
