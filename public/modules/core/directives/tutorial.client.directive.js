'use strict';

/*angular.module('core').directive('tabs', function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {

            var jqueryElm = $("#tabs");
          console.log("elemnis is 123 ");
            $(jqueryElm).tabs()
        }
    };
})*/


/*angular.module('core').directive('drag', function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {

            var jqueryElm = $("#draggable");
          console.log("elemnis is 123 ");
            $(jqueryElm).draggable();
        }
    };
})*/



angular.module('core').directive('drag', function() {
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