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
    })
    .directive('toggle', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                action: "&"
            },
            template: '<div class="switch"><input type="checkbox" /></div>',
            compile: function() {
                return {
                    post: function(scope, element) {

                        $(element)['bootstrapSwitch']();// call bootstrapSwitch once the directive is compiled

                        element.bind('switch-change', scope.action);
                    }
                }
            }
        };
    });
