'use strict';

describe('main app', function () {

    it('should route correctly', function () {
        module('myApp');

        inject(function($route) {
            expect($route.routes[null].redirectTo).toEqual('/lean-timer');
        });
    });
});