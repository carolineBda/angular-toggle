angular.module('app.directives', []).directive('switchChange', function() {
        return {
            restrict: 'A',
            scope: {
                switchChange: "&"
            },
            compile: function() {
                return {
                    post: function(scope, element, attrs) {
                        $('.switch')['bootstrapSwitch']();
                        
                        var clickingCallback = function() {
                            scope.switchChange();
                        };
                        element.bind('switch-change', clickingCallback);
                    }
                }
            }
        };
    });
