angular-toggle
================

Directive to use [Bootstrap switch](http://www.larentis.eu/switch/) by Matt Lartentis in angularJS. Allows you to add a toggle switch styled checkbox to your pages with one directive.


##Usage
    <toggle ng-model="state" action="callback()"></toggle>

Note that state object and callback function must be in your scope

    <toggle ng-model="state" action="callback()" disabled="disabled"></toggle>

##Installation
Add to your project angular-toggle [source](https://github.com/carolineBda/angular-toggle/blob/master/directives/angular-toggle.min.js) and bootstrap-switch [sources](https://github.com/nostalgiaz/bootstrap-switch) (bootstrap-switch.min.js and bootstrap-switch.css).

Include the angular-toggle directives dependency on your angular module

    angular.module("myapp", ["angularToggleDirectives"]);


