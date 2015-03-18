'use strict';


angular.module('core').controller('MystocksController', ['$http', '$scope', 'Authentication',
    function($http, $scope, Authentication) {
        
        
        $http.get('/getmystocks').success(function(response) {

            $scope.stocks = response;
           
            
            $scope.qty = 0;

            //console.

        }).error(function(response) {
            $scope.error = response.message;

            console.log(response.message);
        });
    }
]);
