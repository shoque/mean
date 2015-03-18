'use strict';


angular.module('core').controller('MystocksController', ['$http', '$scope', 'Authentication',
    function($http, $scope, Authentication) {

        $scope.buy = function() {
            console.log($scope.myItem.sym);
            console.log($scope.myItem.price);
            console.log($scope.qty);
            console.log($scope.qty*$scope.myItem.price);
            $scope.myItem=undefined;
             $scope.msg='1 item is added to your portfolio.';

        };

        $http.get('/getmystocks').success(function(response) {

            $scope.stocks = response;


            $scope.qty = 0;
            
            $scope.amount = 77;

            //console.

        }).error(function(response) {
            $scope.error = response.message;

            console.log(response.message);
        });
    }
]);
