'use strict';

describe('myApp leanTimer module', function() {

    var scope, topicCtrl;

    beforeEach(module('myApp.leanTimer'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        spyOn(scope, '$broadcast');

        topicCtrl = $controller('leanTimerController', {
            '$scope': scope
        });

    }));


    describe('lean-timer controller', function(){

        it('should be defined and timer should be stopped', inject(function() {
            expect(topicCtrl).toBeDefined();
        }));

        it('should be able to start the discussion by pushing a button', inject(function() {
            scope.startTopic();
            expect(scope.$broadcast).toHaveBeenCalledWith('timer-start');
            expect(scope.$broadcast).toHaveBeenCalledWith('timer-set-countdown-seconds', 480);
        }));

        it('should declare a continuation vote when the timer expires', inject(function() {
            scope.startTopic();
            scope.$emit('timer-stopped');
            expect(scope.voting).toBe(true);
        }));

        it('should start a four minute countdown on up votes', inject(function() {
            scope.continueDiscussing(true);
            expect(scope.$broadcast).toHaveBeenCalledWith('timer-set-countdown-seconds', 240);
        }));

        it('should start a two minute countdown on middle votes', inject(function() {
            scope.continueDiscussing();
            expect(scope.$broadcast).toHaveBeenCalledWith('timer-set-countdown-seconds', 120);
        }));


    });
});