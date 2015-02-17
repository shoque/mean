'use strict';


angular.module('core').controller('HomeController', ['$http','$scope', 'Authentication',
    function( $httpProvider,$http,$scope, Authentication) {
        // This provides Authentication context.
        $scope.authentication = Authentication;
     

    }
]);
