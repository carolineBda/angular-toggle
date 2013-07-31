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

                        $(element)['bootstrapSwitch']();// call bootstrapSwitch once the directive is compiled

                        element.bind('switch-change', scope.switchChange);
                    }
                }
            }
        };
    });
