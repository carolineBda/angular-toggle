'use strict';

angular.module('angularToggleDirectives', [])
    .directive('switchChange', function() {
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
                action: '&',
                model: '=ngModel',
                isDisabled: '='
            },
            template: '<div class="switch"><input type="checkbox" /></div>',
            link: function(scope, element) {

                $(element)['bootstrapSwitch'](); // call bootstrapSwitch once the directive is compiled

                scope.$watch('model', function(newVal) {
                    $(element).bootstrapSwitch('setState', newVal, true);
                });

                scope.$watch('isDisabled', function(newVal) {
                    $(element).bootstrapSwitch('setActive', !newVal);
                });

                element.bind('switch-change', function() {
                    scope.$apply(function(){
                        scope.model = !scope.model;
                    });
                    scope.$apply(function(){
                        scope.action();
                    });
                });
            }
        };
    });
