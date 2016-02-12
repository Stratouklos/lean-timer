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
            expect(scope.discussing).toBe(false);
        }));

        it('should be able to start the discussion by pushing a button', inject(function() {
            var topicCtrl = createController();
            scope.startTopic();
            expect(scope.$broadcast).toHaveBeenCalledWith('timer-start');
            expect(scope.discussing).toBe(true);
        }));

        it('should be able to switch to a new topic whenever the previous is depleted', inject(function() {
            var topicCtrl = createController();
            scope.startTopic();
            scope.startTopic();
            expect(scope.$broadcast).toHaveBeenCalledWith('timer-reset');
            expect(scope.$broadcast).toHaveBeenCalledWith('timer-set-countdown-seconds', 600);
            expect(scope.discussing).toBe(true);
        }));

    });
});