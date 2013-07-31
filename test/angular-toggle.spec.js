describe('Angular Toggle', function() {
    var element,
        $scope,
        callBackCalled= false;
    var template;
    beforeEach(module('angular-toggle'));

    beforeEach(inject(function($compile, $rootScope) {
        $scope = $rootScope.$new();
        $scope.callback = function(){ callBackCalled = true; };
        element = $compile(angular.element(template))($scope);
        $scope.$digest();
    }));

    describe('switch-change directive attribute', function() {

        template = '<div class="switch" switch-change="callback()"><input type="checkbox" /></div>';

        beforeEach(function() {
            callBackCalled= false
        });

        it('call bootstrap-switch when html initialise', function() {
            expect(element.find('div').hasClass('switch-off')).toBeTruthy();
        });

        it('and call callback when click the toggle', function() {
            element.triggerHandler('switch-change');
            expect(callBackCalled).toBeTruthy();
        });
    });

    describe('toggle directive element', function() {

        template = '<toggle action="callback()"></toggle>';
        beforeEach(function() {
            callBackCalled= false
        });

        it('call bootstrap-switch when html initialise', function() {
            expect(element.find('div').hasClass('switch-off')).toBeTruthy();
        });

        it('and call callback when click the toggle', function() {
            element.triggerHandler('switch-change');
            expect(callBackCalled).toBeTruthy();
        });
    });
});