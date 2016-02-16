'use strict';

angular.module('myApp.leanTimer', ['ngRoute', 'timer'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/lean-timer', {
            templateUrl: 'https://cdn.rawgit.com/Stratouklos/lean-timer/gh-pages/leanTimer.html',
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
            $scope.voting = true;
            $scope.discussing = false;
            $scope.$digest();
        });

        $scope.$on('timer-tick', function (event, data) {
            console.log( data);

        });



        $scope.continueDiscussing = function (full) {
            $scope.$broadcast('timer-reset');

            if (full) {
                $scope.$broadcast('timer-set-countdown-seconds', 240);
            } else {
                $scope.$broadcast('timer-set-countdown-seconds', 120);
            }
            startTimer();
        };

        var startTimer = function () {
            $scope.$broadcast('timer-start');
            $scope.discussing = true;
            $scope.voting = false;
        }

    }]);