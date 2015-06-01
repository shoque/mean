angular.module('core').directive('carousel', function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {


            var jqueryElm = $(".pgwSlider");

            $(jqueryElm).pgwSlider({

                transitionEffect: 'sliding',
                displayList: false,
                displayControls: true
            });

        }
    };
});
