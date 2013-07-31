'use strict';

angular.module('angular-toggle', []).directive('switchChange', function() {
        return {
            restrict: 'A',
            scope: {
                switchChange: "&"
            },
            compile: function() {
                return {
                    post: function(scope, element) {
                        $(element)['bootstrapSwitch']();
                        
                        var clickingCallback = function() {
                            scope.switchChange();
                        };
                        element.bind('switch-change', clickingCallback);
                    }
                }
            }
        };
    });
