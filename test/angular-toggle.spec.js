describe('Angular Toggle', function() {
    var element,
        scope,
        compile,
        callBackCalled = false,
        template;

    beforeEach(module('angularToggleDirectives'));
    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        scope.state = false;
        scope.disabled = false;
        scope.callback = function(){ callBackCalled = true; };
        compile = $compile;
        element = compile(angular.element(template))(scope);
        scope.$digest();
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

        template = '<toggle ng-model="state" action="callback()" disabled="disabled"></toggle>';
        beforeEach(function() {
            callBackCalled = false;
        });

        it('call bootstrap-switch when html initialise', function() {
            expect(element.find('div').hasClass('switch-off')).toBeTruthy();
        });

        it('and call callback when click the toggle', function() {
            element.triggerHandler('switch-change');
            expect(callBackCalled).toBeTruthy();
        });

        it('and model is change when the toggle is clicked', function() {
            expect(scope.state).toBeFalsy();
            element.triggerHandler('switch-change');
            expect(scope.state).toBeTruthy();
            element.triggerHandler('switch-change');
            expect(scope.state).toBeFalsy();
        });

        it('and set its state according to the passing model', function() {
            scope.state = true;
            element = compile(angular.element(template))(scope);
            scope.$digest();
            expect(element.find('div').hasClass('switch-on')).toBeTruthy();
        });

        it('and get disabled when disable is set to true', function() {
            expect(element.find('input').attr('disabled')).toBe(undefined);
            scope.disabled = true;
            scope.$digest();
            expect(element.find('input').attr('disabled')).toEqual('disabled');
        });
    });
});