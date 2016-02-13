'use strict';

describe('myApp leanTimer module', function() {

    var scope, createController;

    beforeEach(module('myApp.leanTimer'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        spyOn(scope, '$broadcast');

        createController = function() {
            return $controller('leanTimerController', {
                '$scope': scope
            });
        };
        var topicCtrl = createController();

    }));


    describe('lean-timer controller', function(){

        it('should be defined and timer should be stopped', inject(function() {
            var topicCtrl = createController();
            expect(topicCtrl).toBeDefined();
        }));

        it('should be able to start the discussion by pushing a button', inject(function() {
            var topicCtrl = createController();
            scope.startTopic();
            expect(scope.$broadcast).toHaveBeenCalledWith('timer-start');
        }));

        it('should be able to switch to a new discussion whenever the previous is depleted', inject(function() {
            createController();
            scope.startTopic();
            scope.startTopic();
            expect(scope.$broadcast).toHaveBeenCalledWith('timer-set-countdown-seconds', 600);
        }));

        it('should declare a continuation vote when the timer expires', inject(function() {
            createController();
            scope.startTopic();
            scope.$emit('timer-stopped');
            expect(scope.voting).toBe(true);
        }));


    });
});