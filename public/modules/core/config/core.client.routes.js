'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		}).state('tutorial', {
			url: '/tutorial',
			templateUrl: 'modules/core/views/tutorial.client.view.html'
		}).
		state('drag', {
			url: '/drag',
			templateUrl: 'modules/core/views/drag.client.view.html'
		}).state('timer', {
			url: '/timer',
			templateUrl: 'modules/core/views/timer.client.view.html'
		}).state('stockinfo', {
			url: '/stockinfo',
			templateUrl: 'modules/core/views/dse.client.view.html'
		}).state('gridinfo', {
			url: '/gridinfo',
			templateUrl: 'modules/core/views/grid.client.view.html'
		}).state('webrtc', {
			url: '/webrtc',
			templateUrl: 'modules/core/views/webrtc.client.view.html'
		}).state('animate', {
			url: '/animate',
			templateUrl: 'modules/core/views/animate.client.view.html'
		});
;



	}
]);