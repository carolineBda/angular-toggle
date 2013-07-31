'use strict';

angular.module('angular-toggle', []).directive('switch-change', function() {
        return {
            restrict: 'A',
            scope: {
                switchChange: "&"
            },
            compile: function() {
                return {
                    post: function(scope, element) {
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
