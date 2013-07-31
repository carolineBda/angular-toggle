describe('Toggle Switch', function() {
    var $scope, elm;
    var callback = function(){
        console.log('called!');
    };

    var template = '<div class="switch" switch-change="callback"><input type="checkbox" /></div>';

    function checkbox() {
        return elm.find('input');
    }

    beforeEach(module('angular-toggle'));

    beforeEach(inject(function($rootScope, $compile) {
        $scope = $rootScope.$new();
        elm = angular.element(template);
        $compile(elm)($scope);
        $scope.$digest();
    }));

    it('by default model is false', function() {
        expect(checkbox.value).toEqual(false);
    });

});