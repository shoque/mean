'use strict';

module.exports = function(app) {
    // Root routing
    var users = require('../../app/controllers/users.server.controller');
    var core = require('../../app/controllers/core.server.controller');
    app.route('/').get(core.index);
    app.route('/jquerytest').get(core.jquerytest);
    app.route('/getdseData').get(core.dseprocess);
    app.route('/getdsedailyData').get(users.requiresLogin, core.dsedaily);
    


};
