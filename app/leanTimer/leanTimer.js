'use strict';

angular.module('myApp.leanTimer', ['ngRoute', 'timer'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lean-coffe', {
    templateUrl: 'leanTimer.html',
    controller: 'topicCtrl'
  });
}])


.controller('leanTimerController', ['$scope', '$window', function($scope, $window) {
  $scope.discussing = false;
  $scope.voteInProgress = false;

  $scope.startTopic = function (){
    if ($scope.discussing || $scope.voteInProgress) {
      console.log('Interrupting current discussion');
      $scope.$broadcast('timer-reset');
      $scope.$broadcast('timer-set-countdown-seconds', 600);
    }
    $scope.$broadcast('timer-start');
    console.log('Starting a new discussion');

    $scope.discussing = true;
    $scope.numberOfVotes = 0;
    $scope.voteInProgress = false;
    $scope.$digest();

  };

  $scope.$on('timer-stopped', function (event, data){
    $window.alert("Time's out! Please vote to continue or not");
    console.log('Timer Stopped - data = ', data);
    $scope.numberOfVotes++;
    $scope.discussing = false;
    $scope.voteInProgress = true;
    $scope.$digest();
  });

  $scope.continueDiscussing = function () {
    console.log('Continuing the discussion for ', $scope.numberOfVotes);
    $scope.numberOfVotes++;
    if ($scope.numberOfVotes < 2) {
      $scope.$broadcast('timer-set-countdown-seconds', 300);
    } else {
      $scope.$broadcast('timer-set-countdown-seconds', 120);
    }
    $scope.$broadcast('timer-start');
    $scope.voteInProgress = false;
    $scope.$digest();
  };

}]);
