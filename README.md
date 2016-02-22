[![Build Status](https://travis-ci.org/Stratouklos/lean-timer.svg?branch=master)](https://travis-ci.org/Stratouklos/lean-timer)[![devDependency Status](https://david-dm.org/Stratouklos/lean-timer/dev-status.svg)](https://david-dm.org/Stratouklos/lean-timer#info=devDependencies)

# Lean-timer — a lean coffee timer as dreamed up by Jeff and implemented by Stratos.

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Getting Started

To get you started you can simply clone the lean-timer repository and install the dependencies:

### Prerequisites

We also use a number of node.js tools to initialize and test. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone lean-timer

Clone the repository using [git][git]:

```
git clone https://github.com/Stratouklos/lean-timer.git
cd lean-timer
```

### Install Dependencies

```
npm install
```


### Run the Application


```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.


## Directory Layout

```
app/                    --> all of the source files for the application
  index.html            --> app layout file (the main html template file of the app)
  bower_components/     --> bower dependencies are downloaded here  
  images/
  sounds/
  views/                --> contains html specific to views
  styles/
    app.css
  scripts/
    app.js              --> main app definition and router
    controllers/
test/
    karma.conf.js       --> config file for running unit tests with Karma
    spec/               --> jasmine spec files  
```

## Testing

```
npm test
```

## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the project.
Now that the angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


## Building

Gulp is used to build the project.

```
gulp
```

Will build and copy all necessary files into dist/ directory

## Deploying to gh-pages

Assuming that the dist/ directory contains the latest deployable code this command will publish the page to gh-pages.

```
gulp deploy
```

For more information see [gulp-gh-pages](https://www.npmjs.com/package/gulp-gh-pages)

## Continuous Integration

### Travis CI

For CI and build information please check [Travis CI][https://travis-ci.org/Stratouklos/lean-timer].
