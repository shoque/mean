'use strict';


angular.module('core').controller('GridController', ['$http', '$scope', 'Authentication',
    function ($http, $scope, Authentication) {
          $http.get('/getdseData').success(function(response) {

              $scope.names = response;
              //console.

          }).error(function(response) {
              $scope.error = response.message;

              console.log(response.message);
          });

        $scope.myData = [{
            "firstName": "Cox",
            "lastName": "Carney",
            "company": "Enormo",
            "employed": true
        }, {
            "firstName": "Lorraine",
            "lastName": "Wise",
            "company": "Comveyer",
            "employed": false
        }, {
            "firstName": "Nancy",
            "lastName": "Waters",
            "company": "Fuelton",
            "employed": false
        }];
    }
]);
