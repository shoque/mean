'use strict';
angular.module('core').directive('ngVideo', function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {

            var jqueryElm = $("#draggable");
          //console.log("elemnis is 123 ");
            $(jqueryElm).draggable();
          //  $(jqueryElm).knob();
        }
    };
});