'use strict';

angular.module('myApp.leanTimer', ['ngRoute', 'timer'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/lean-timer', {
            templateUrl: 'leanTimer/leanTimer.html',
            controller: 'leanTimerController'
        });
    }])


    .controller('leanTimerController', ['$scope', function ($scope) {
        $scope.message = 'Pick a topic and discuss';

        $scope.startTopic = function () {
            $scope.$broadcast('timer-set-countdown-seconds', 480);
            startTimer();
        };

        $scope.$on('timer-stopped', function () {
            $scope.message = 'That was great! Want more of the same?';
            $scope.voting = true;
            $scope.$digest();
        });

        $scope.continueDiscussing = function (full) {
            if (full) {
                $scope.$broadcast('timer-set-countdown-seconds', 240);
            } else {
                $scope.$broadcast('timer-set-countdown-seconds', 120);
            }
            startTimer();
        };

        var startTimer = function () {
            $scope.$broadcast('timer-start');
            $scope.message = 'Remember to stay on topic';
            $scope.voting = false;
            $scope.$digest();
        }

    }]);