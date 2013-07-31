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

    describe('switch-change attribute directive', function() {

        it('call bootstrap-switch when html initialise', function() {
            expect(element.find('div').hasClass('switch-off')).toBeTruthy();
        });

        it('and call callback when click the toggle', function() {
            element.triggerHandler('switch-change');
            expect(callBackCalled).toBeTruthy();
        });
    });
});