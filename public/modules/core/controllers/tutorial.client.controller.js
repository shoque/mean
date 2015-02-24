'use strict';


angular.module('core').controller('TutorialController', ['$http', '$scope', 'Authentication',
    function($httpProvider, $http, $scope, Authentication) {
        // This provides Authentication context.
        $scope.authentication = Authentication;
        $scope.name = "this is angular tutorial page";

        $scope.number = 24;

        $scope.myData = [{
            name: "Moroni",
            age: 50
        }, {
            name: "Tiancum",
            age: 43
        }, {
            name: "Jacob",
            age: 27
        }, {
            name: "Nephi",
            age: 29
        }, {
            name: "Enos",
            age: 34
        }];
        $scope.gridOptions = {
            data: 'myData'
        };


    }
]);
