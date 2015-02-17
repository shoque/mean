'use strict';


angular.module('core').controller('TutorialController', ['$http', '$scope', 'Authentication',
    function($httpProvider, $http, $scope, Authentication) {
        // This provides Authentication context.
        $scope.authentication = Authentication;
        $scope.name = "this is angular tutorial page";

        $scope.number = 24;


    }
]);
