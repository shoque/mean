'use strict';


angular.module('core').controller('DseController', ['$http', '$scope', 'Authentication',
    function($http, $scope, Authentication) {
        $http.get('/getdseData').success(function(response) {

            $scope.names = response;
            //console.

        }).error(function(response) {
            $scope.error = response.message;

            console.log(response.message);
        });

        $http.get('/getdsedailydata').success(function(response) {

            $scope.daily = response;
            //console.

        }).error(function(response) {
            $scope.error = response.message;

            console.log(response.message);
        });
    }
]);
