'use strict';

describe('myApp leanTimer module', function () {

    var scope, controller, audioSpy, soundSpy;

    beforeEach(module('myApp.leanTimer'));
    beforeEach(inject(function ($rootScope, $controller, ngAudio) {
        scope = $rootScope.$new();
        spyOn(scope, '$broadcast');
        soundSpy = jasmine.createSpy('playSpy');
        audioSpy = spyOn(ngAudio, 'load').and.returnValue({
                setVolume: function() {},
                play: soundSpy,
            }
        );

        controller = $controller('leanTimerController', {
            '$scope': scope
        });

    }));

    describe('lean-timer controller', function () {

        it('should be defined and timer should be stopped', inject(function () {
            expect(controller).toBeDefined();
            expect(scope.voting).toBe(false);
            expect(scope.discussing).toBe(false);
        }));

        it('should start the countdown timer from 480 seconds', inject(function () {
            scope.startTopic();
            expect(scope.$broadcast).toHaveBeenCalledWith('timer-start');
            expect(scope.$broadcast).toHaveBeenCalledWith('timer-set-countdown-seconds', 480);
            expect(scope.discussing).toBe(true);
        }));

        it('should declare a continuation vote when the timer expires', inject(function () {
            scope.$emit('timer-stopped');
            expect(scope.voting).toBe(true);
            expect(scope.discussing).toBe(false);
        }));

        it('should start a four minute countdown on up votes', inject(function () {
            scope.continueDiscussing(true);
            expect(scope.$broadcast).toHaveBeenCalledWith('timer-set-countdown-seconds', 240);
        }));

        it('should start a two minute countdown on middle votes', inject(function () {
            scope.continueDiscussing();
            expect(scope.$broadcast).toHaveBeenCalledWith('timer-set-countdown-seconds', 120);
        }));

        it('should load the ticking and dinging sounds', inject(function () {
            expect(audioSpy).toHaveBeenCalledWith('sounds/tick.ogg');
            expect(audioSpy).toHaveBeenCalledWith('sounds/ding.ogg');
        }));

        it('should play ticking sounds when the timer ticks', inject(function () {
            scope.$emit('timer-tick');
            expect(soundSpy.calls.count()).toEqual(1);
        }));

        it('should play dinging sounds when the timer stops', inject(function () {
            scope.$emit('timer-stopped');
            expect(soundSpy.calls.count()).toEqual(1);
        }));

        it('should be able to mute sounds', inject(function () {
            scope.dingSound = {muting : false};
            scope.tickSound = {muting : false};
            scope.toggleSound();
            expect(scope.dingSound.muting).toBe(true);
            expect(scope.tickSound.muting).toBe(true);
        }));

    });
});