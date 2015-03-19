'use strict';


angular.module('core').controller('MystocksController', ['$http', '$scope', 'Authentication','Articles',
    function($http, $scope, Authentication, Articles) {
         $scope.authentication=Authentication;
         
        $scope.find = function() {
            $scope.articles = Articles.query();
        };

        $scope.buy = function() {

            var item = {};
            item.symbol = $scope.myItem.sym;
            item.price = $scope.myItem.price;
            item.quantity = $scope.qty;


            console.log($scope.myItem.sym);
            console.log($scope.myItem.price);
            console.log($scope.qty);
            console.log($scope.qty * $scope.myItem.price);
            $scope.myItem = undefined;
            $scope.qty=0;

            $http.post('/buyItem', item).success(function(response) {
                $scope.success = response.message;   
                $scope.msg = '1 item is added to your portfolio.';
                $scope.find();            

            }).error(function(response) {
                $scope.error = response.message;
                console.log(response.message);
            });


        };

        $http.get('/getmystocks').success(function(response) {
            $scope.stocks = response;
            $scope.qty = 0;

        }).error(function(response) {
            $scope.error = response.message;
            console.log(response.message);
        });
    }
]);
