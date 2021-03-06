'use strict';

angular.module('myApp.leanTimer', ['ngRoute', 'timer', 'ngAudio'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/lean-timer', {
            templateUrl: 'views/leanTimer.html',
            controller: 'leanTimerController'
        });
    }])

    .controller('leanTimerController', ['$scope', 'ngAudio', function ($scope, ngAudio) {
        //State
        $scope.discussing = false;
        $scope.voting = false;

        //Sounds
        $scope.tickSound = ngAudio.load("sounds/tick.ogg");
        $scope.tickSound.setVolume(0.33);
        $scope.dingSound = ngAudio.load('sounds/ding.ogg');

        var startTimer = function () {
            $scope.$broadcast('timer-start');
            $scope.discussing = true;
            $scope.voting = false;
        };

        $scope.startTopic = function () {
            $scope.$broadcast('timer-set-countdown-seconds', 480);
            startTimer();
        };

        $scope.$on('timer-stopped', function () {
            $scope.dingSound.play();
            $scope.voting = true;
            $scope.discussing = false;
            //$scope.$digest();
        });

        $scope.continueDiscussing = function (full) {
            $scope.$broadcast('timer-reset');
            $scope.$broadcast('timer-set-countdown-seconds', full ? 240 : 120);
            startTimer();
        };


        $scope.toggleSound = function () {
            $scope.tickSound.muting = !$scope.tickSound.muting;
            $scope.dingSound.muting = !$scope.dingSound.muting;
        };

        $scope.$on('timer-tick', function () {
            $scope.tickSound.play();
        });

    }]);