'use strict';

describe('myApp.topic module', function() {

    var scope, createController;

    beforeEach(module('myApp.topic'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        spyOn(scope, '$broadcast');

        createController = function() {
            return $controller('topicCtrl', {
                '$scope': scope
            });
        };
        var topicCtrl = createController();

    }));


    describe('topic controller', function(){

        it('should be defined and timer should be stopped', inject(function() {
            var topicCtrl = createController();
            expect(topicCtrl).toBeDefined();
            expect(scope.timerRunning).toBe(false);
        }));

        it('should be able to start the timer', inject(function() {
            var topicCtrl = createController();
            scope.startTimer();
            expect(scope.$broadcast).toHaveBeenCalledWith('timer-start');
            expect(scope.timerRunning).toBe(true);
        }));

        it('if the timer is running it should not start again', inject(function() {
            var topicCtrl = createController();
            scope.startTimer();
            scope.startTimer();
            expect(scope.$broadcast.calls.count()).toBe(1);
            expect(scope.timerRunning).toBe(true);
        }));

    });
});