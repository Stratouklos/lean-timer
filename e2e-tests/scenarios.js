'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });

  describe('topic', function() {

    beforeEach(function() {
      browser.get('index.html#/topic');
    });


    it('should render topic when user navigates to /topic', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/Discuss this important topic/);
    });


    it('should have a start button', function() {
      expect(element.all(by.css('[ng-view] #start_button')).first().getText()).
      toMatch(/Start/);
    });

  });

  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
