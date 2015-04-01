'use strict';


angular.module('core').controller('DseController', ['$http', '$scope', 'Authentication', 'Articles',
    function($http, $scope, Authentication, Articles) {
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


        $scope.find = function() {
            $scope.articles = Articles.query();
        };



        $scope.buy = function() {
            console.log($scope.companyname.sym);
            console.log($scope.companyname.price);
            console.log($scope.quantity);


            var article = new Articles({
                title: $scope.companyname.sym,
                content: $scope.companyname.price,
                quantity: $scope.quantity
            });
            article.$save(function(response) {
                // $location.path('userprofle/');

                //$scope.companyname.sym = '';
                $scope.companyname.price = '';
                $scope.quantity = '';

                console.log('success');

            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };



        $scope.remove = function(id) {

                    
                 console.log(id);   
                console.log($scope.articles.length);
                $scope.articles.$remove(id);
                console.log(456);
            }
        


        /*  
          
                       $scope.removeRow = function(name) {
                           var index = -1;
                           var comArr = eval($scope.articles);
                           for (var i = 0; i < comArr.length; i++) {
                               if (comArr[i].name === name) {
                                   index = i;
                                   break;
                               }
                           }
                           if (index === -1) {
                               alert("Something gone wrong");
                           }
                           $scope.articles.splice(index, 1);

                       };
         */

        $scope.totalAmount = function() {
            var total = 0;
            for (var i = 0; i < $scope.articles.length; i++) {
                var product = $scope.articles[i];
                total += (product.quantity * product.content);
            }
            return total;
        }





    }
]);
