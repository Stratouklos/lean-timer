'use strict';

angular.module('myApp.leanTimer', ['ngRoute', 'timer'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lean-timer', {
    templateUrl: 'leanTimer/leanTimer.html',
    controller: 'leanTimerController'
  });
}])


.controller('leanTimerController', ['$scope', '$window', function($scope, $window) {
  $scope.voting = false;

    $scope.startTopic = function (){
      console.log('Starting a new discussion');
      $scope.$broadcast('timer-set-countdown-seconds', 600);
      $scope.$broadcast('timer-start');

      $scope.voting = false;
      $scope.$digest();

  };

  $scope.$on('timer-stopped', function (event, data){
    $window.alert("Time's out! Please vote to continue or not");
    console.log('Timer Stopped - data = ', data);
    $scope.voting = true;
    $scope.$digest();
  });

  $scope.continueDiscussing = function (full) {
    console.log('Continuing the discussion for ', $scope.numberOfVotes);
    if (full) {
      $scope.$broadcast('timer-set-countdown-seconds', 300);
    } else {
      $scope.$broadcast('timer-set-countdown-seconds', 120);
    }
    $scope.$broadcast('timer-start');
    $scope.voting = false;
    $scope.$digest();
  };

}]);
