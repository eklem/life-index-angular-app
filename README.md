# The Norch-Angular app

## Overview

This application is an example of a web-application that speaks to and renders [Norch](https://github.com/fergiemcdowall/norch) using
angular.js. The application is loosely based on the **Google Phone Gallery**, which no longer
exists, the [Angular Phone Tutorial](https://docs.angularjs.org/tutorial/), and the [Angular-Seed Project](https://github.com/angular/angular-seed)

You need to set up a remote norch in order for this app to work- see 'Norch' section below.

## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-github].
- Git [home][git-home] (download, documentation).

### Node.js and Tools

- Get [Node.js][node-download].
- Install the tool dependencies (`npm install`).

### Norch

- Get [Norch](https://github.com/fergiemcdowall/norch)
- Follow the intructions and set up a norch server on http://localhost:3030
- Clone this reuters dataset: https://github.com/fergiemcdowall/reuters-21578-json
- Index one or more files of reuters artcles from `world-bank-projects-norchified.json`. You can do this by using the GUI in norch and navigating to the file on your PC, or by running `curl --form document=@world-bank-projects-norchified.json  http://localhost:3030/indexer --form filterOn=mjtheme,totalamt` from the command line, or by investigating [Norch-Indexer](https://github.com/fergiemcdowall/norch-indexer)
- If you are experiencing problems with Access-Control-Allow-Origin start norch with a cors header like so: `./node_modules/norch/bin/norch -c http://localhost:8000`


## Workings of the application

- The application filesystem layout structure is based on the [angular-seed] project.
- This application needs a Norch server running on http://localhost:3030 with some sample data index. See prerequisites section above.
- Read the Development section at the end to familiarize yourself with running and developing
  an angular application.



## Development for your own project

The following docs describe how you can test and develop further this application.

### Get the code

The easiest way is to just get the code with `git clone`:
```
git clone git@github.com:fergiemcdowall/norch-angular-app.git
```


### Installing dependencies

The application relies upon various node.js tools, such as Bower, Karma and Protractor.  You can
install these by doing:

```
cd ./norch-angular-app
npm install
```

This will also run bower, which will download the angular files needed for the current step of the
tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

### Running the app during development

- Run `npm start`
- navigate your browser to `http://localhost:8000/app/index.html` to see the app running in your browser.

### Running unit tests

We recommend using [Jasmine][jasmine] and [Karma][karma] for your unit tests/specs, but you are free
to use whatever works for you.

- Start Karma with `npm test`
  - A browser will start and connect to the Karma server. Chrome is the default browser, others can
  be captured by loading the same url as the one in Chrome or by changing the `test/karma.conf.js`
  file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.


### End to end testing

We recommend using [Jasmine][jasmine] and [Protractor][protractor] for end-to-end testing.

Requires a webserver that serves the application. See Running the app during development, above.

- Serve the application: run `npm start`.
- In a separate console run the end2end tests: `npm run protractor`. Protractor will execute the
  end2end test scripts against the web application itself.
  - The configuration is set up to run the tests on Chrome directly. If you want to run against
    other browsers then you must install the webDriver, `npm run update-webdriver`, and modify the
  configuration at `test/protractor-conf.js`.

## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        app.js          --> the main application module
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        animations.js   --> hooks for running JQuery animations with ngAnimate
      partials/         --> angular view partials (partial html templates) used by ngRoute
        partial1.html
        partial2.html
      bower_components  --> 3rd party js libraries, including angular and jquery

    scripts/            --> handy scripts
      update-repo.sh       --> pull down the latest version of this repos
                               (BE CAREFUL THIS DELETES ALL CHANGES YOU HAVE MADE)
      private/             --> private scripts used by the Angular Team to maintain this repo
    test/               --> test source files and libraries
      karma.conf.js        --> config file for running unit tests with Karma
      protractor-conf.js   --> config file for running e2e tests with Protractor
      e2e/
        scenarios.js       --> end-to-end specs
      unit/             --> unit level specs/tests
        controllersSpec.js --> specs for controllers
        directivesSpec.js  --> specs for directives
        filtersSpec.js     --> specs for filters
        servicesSpec.js    --> specs for services

##Further reading

[7 Zip]: http://www.7-zip.org/
[angular-seed]: https://github.com/angular/angular-seed
[DI]: http://docs.angularjs.org/guide/di
[directive]: http://docs.angularjs.org/guide/directive
[filterFilter]: http://docs.angularjs.org/api/ng/filter/filter
[git-home]: http://git-scm.com
[git-github]: http://help.github.com/set-up-git-redirect
[ngRepeat]: http://docs.angularjs.org/api/ng/directive/ngRepeat
[ngView]: http://docs.angularjs.org/api/ngRoute/directive/ngView
[node-download]: http://nodejs.org/download/
[$resource]: http://docs.angularjs.org/api/ngResource/service/$resource
[$route]: http://docs.angularjs.org/api/ngRoute/service/$route
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io/
[karma]: http://karma-runner.github.io
