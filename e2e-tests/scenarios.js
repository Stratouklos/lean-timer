'use strict';

describe('my app', function () {


    it('should automatically redirect to /lean-timer when location hash/fragment is empty', function () {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/lean-timer");
    });


    describe('lean-timer', function () {

        beforeEach(function () {
            browser.get('index.html#/lean-timer');
        });


        it('should render lean-timer when user navigates to /lean-timer', function () {
            expect(element.all(by.id('welcome-message')).getText()).
                toMatch(/Pick a topic and discuss/);
        });


        it('should have a start button', function () {
            expect(element.all(by.css('[ng-view] #start_button')).first().getText()).
                toMatch(/Start/);
        });

    });

});
