'use strict';

angular.module('myApp.topic', ['ngRoute', 'timer'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/topic', {
    templateUrl: 'topic/topic.html',
    controller: 'topicCtrl'
  });
}])

.controller('topicCtrl', ['$scope', '$window', function($scope, $window) {
  $scope.timerRunning = false;

  $scope.startTimer = function (){
    if ($scope.timerRunning === false) {
      $scope.$broadcast('timer-start');
      $scope.timerRunning = true;
    }
  };


  $scope.$on('timer-stopped', function (event, data){
    $window.alert("Time's out!");
    console.log('Timer Stopped - data = ', data);
  });
}]);
