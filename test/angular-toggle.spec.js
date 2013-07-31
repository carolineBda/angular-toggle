describe('Angular Toggle', function() {
    var element;

    var callBackCalled= false;
    var callback = function(){
        console.log('called!');
        callBackCalled = true;
    };

    var template = '<div class="switch" switch-change="callback()"><input type="checkbox" /></div>';

    function checkbox() { return element.find('input'); }

    beforeEach(module('angular-toggle'));

    beforeEach(inject(function($compile, $rootScope) {
        var $scope = $rootScope.$new();
        element = $compile(angular.element(template))($scope);
        $scope.$digest();
    }));

    it('bootstrap-switch is called when html initialise', function() {
        expect(element.find('div').hasClass('switch-off')).toBeTruthy();
    });

    it('when click the toggle then callback called', function() {
        element.triggerHandler('click');
        expect(element.find('div').hasClass('switch-on')).toBeTruthy();
        expect(element.find('div').hasClass('switch-off')).toBeFalsy();
        expect(callBackCalled).toBeTruthy();
    });

});