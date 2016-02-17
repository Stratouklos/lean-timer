'use strict';

angular
    .module('leanTimerApp', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/lean-timer', {
            templateUrl: 'views/leanTimer.html',
            controller: 'leanTimerController'
        })
        .otherwise({
            redirectTo: '/lean-timer'
        });

    }]);