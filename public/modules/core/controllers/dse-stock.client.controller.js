'use strict';


angular.module('core').controller('DseStockController', ['$http', '$scope', 'Authentication',
    function($http, $scope, Authentication) {
        

        $http.get('/getdsedailydata').success(function(response) {

            $scope.daily = response;
            //console.

        }).error(function(response) {
            $scope.error = response.message;

            console.log(response.message);
        });
        
    }
]);
