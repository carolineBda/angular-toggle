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
            require: 'ngModel',
            scope: {
                action: "&",
                model: '=ngModel'
            },
            template: '<div class="switch"><input type="checkbox" /></div>',
            compile: function() {
                return {
                    post: function(scope, element, attrs, ngModel) {

                        $(element)['bootstrapSwitch']();// call bootstrapSwitch once the directive is compiled

                        if (!scope.model) {
                            scope.model = false;
                        } else {
                            $(element).bootstrapSwitch('setState', scope.model);
                        }

                        var clickingCallback = function() {

                            scope.model = ! scope.model;

                            scope.$apply(function () {
                                ngModel.$setViewValue(scope.model);
                            });

                            scope.action();
                        };

                        element.bind('switch-change', clickingCallback);
                    }
                }
            }
        };
    });
