angular-toggle
================

Directive to use [Bootstrap switch](http://www.larentis.eu/switch/)  by Matt Lartentis in angularJS

##Usage
    <div ng-controller="MyController">
        <div class="switch" switch-change="func()">
            <input type="checkbox" />
        </div>
    </div>


    myApp.controller('MyController', function($scope, $window) {
        $scope.func = function() { 
            console.log('Clicked');    
        };
    });
