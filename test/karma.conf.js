// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2016-02-16 using
// generator-karma 1.0.1

module.exports = function(config) {
  'use strict';

  config.set({

    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/'
    },

    preprocessors: {
      'app/scripts/**/*.js': ['coverage']
    },

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      // endbower

    "app/bower_components/jquery/dist/jquery.js",
    "app/bower_components/angular/angular.js",
    'app/bower_components/angular-mocks/angular-mocks.js',
    "app/bower_components/angular-route/angular-route.js",
    "app/bower_components/angular-loader/angular-loader.js",
    "app/bower_components/angular-audio/app/angular.audio.js",
    "app/bower_components/momentjs/moment.js",
    "app/bower_components/humanize-duration/humanize-duration.js",
    "app/bower_components/angular-timer/dist/angular-timer.js",
    "app/bower_components/bootstrap/dist/js/bootstrap.js",
    "app/scripts/app.js",
    "app/scripts/controllers/leanTimer.js",
    "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "Firefox"
    ],

    // Which plugins to enable
    plugins: [
      'karma-firefox-launcher',
      'karma-coverage',
      "karma-jasmine"
    ],

    reporters: ['progress', 'coverage'],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
