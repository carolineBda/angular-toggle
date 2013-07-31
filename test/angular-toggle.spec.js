describe('Angular Toggle', function() {
    var element,
        $scope,
        callBackCalled= false,
        template = '<div class="switch" switch-change="callback()"><input type="checkbox" /></div>';

    beforeEach(module('angular-toggle'));

    beforeEach(inject(function($compile, $rootScope) {
        $scope = $rootScope.$new();
        $scope.callback = function(){ callBackCalled = true; };
        element = $compile(angular.element(template))($scope);
        $scope.$digest();
    }));

    it('bootstrap-switch is called when html initialise', function() {
        expect(element.find('div').hasClass('switch-off')).toBeTruthy();
    });

    it('when click the toggle then callback called', function() {
        element.triggerHandler('switch-change');
        expect(callBackCalled).toBeTruthy();
    });

});