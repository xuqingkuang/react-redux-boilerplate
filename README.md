# React Redux Boilerplate

[![Build Status](https://travis-ci.org/xuqingkuang/react-redux-boilerplate.svg?branch=master)](https://travis-ci.org/xuqingkuang/react-redux-boilerplate)
[![codecov.io](https://codecov.io/github/xuqingkuang/react-redux-boilerplate/coverage.svg?branch=master)](https://codecov.io/github/xuqingkuang/react-redux-boilerplate?branch=master)
[![Dependency Status](https://david-dm.org/xuqingkuang/react-redux-boilerplate.svg)](https://david-dm.org/xuqingkuang/react-redux-boilerplate)
[![devDependency Status](https://david-dm.org/xuqingkuang/react-redux-boilerplate/dev-status.svg)](https://david-dm.org/xuqingkuang/react-redux-boilerplate#info=devDependencies)

Another template that makes React and redux web app developmet easier.

## Demo

[Click here for demo](http://xuqingkuang.github.io/react-redux-boilerplate)

## Features

* React 15
* React Router 2.2
* Redux 3.4 (Predictable state container)
* Redux Devtools for Chrome Extension supported
* Node 5 Compatible, version 4 is minimal required for compile
* Babel 6 for ES6 support
* Jest (Unit testing framework)
* Browser Live Reload based on react-transform-hmr, it build codes pretty fast!
* CSS / HTML / JS minification / Image optimization when built
* JS code duplication removal during built
* Code is minimized and focused on core features only.

If you are interested, please read the `package.json` file for all installed modules.

Feel free to contribute or fork it if you find this repo could help the community.

## Installation

### Requirements

* Node 4.0 is required at least for ES6 compile support.
* Gulp must be installed globally with `$ npm install -g gulp`

### Start

1. Clone the repo - `$ git clone https://github.com/xuqingkuang/react-redux-boilerplate`
2. Install the dependencies - `$ cd react-redux-boilerplate && npm install`

#### *Start Environment in Docker*

The project supported the node development in Docker, no need to setup node
environment locally, just install [Docker Toolbox](https://www.docker.com/products/docker-toolbox)
and then start the `Docker Quickstart Terminal` and then change to the project
folder. and execute following commands

    # Pull the customized images
    $ docker pull xuqingkuang/node
    # Install dependencies
    $ docker run -v $(pwd):/project -w /project npm install
    # Start the environment
    $ docker-compose up

Then navigate to the Docker host(`192.168.99.100` for Windows/Mac by default),
you will see the project started.

*BUG: The `Browser Live Reload` feature seems broken in Docker container, please
don't report bugs relate of it.*

## Execution & Gulp Tasks

### Start develop environment

    $ gulp

Run gulp directly without any options will build the codes and start a
development web server on `http://localhost:8000`, then you can open a browsre to
access the page, the codes in `src` will be compiled at run time when change
anything, and the browser will auto reload.

By the way, the step is running on memory, there's no any files generated.

### Unit test

    $ gulp test

Will call [Jest](http://facebook.github.io/jest) to execute the unit testing.

### Build the codes for production

    $ gulp production

The codes will be compiled and placed to `public` folder, all of them are
minimized.

###  Clean the built folder

    $ gulp clean

The all files in `public` folder will be removed.

## Structure

    react-redux-boilerplate           - Project root
    |-- assets                        - Static resources
    |   |-- imgs                      - Static Images
    |   `-- index.html                - Entrance html
    |-- coverage                      - Testing coverage report generated
    |   `-- icov-report
    |       `-- index.html            - Graphic testing coverage report
    |-- src                           - Source codes
    |   |-- app.js                    - Entrance Javascript
    |   |-- actions                   - Redux Actions
    |   |   |-- __tests__
    |   |   |   `-- titles-test.js
    |   |   |-- index.js
    |   |   `-- titles.js
    |   |-- components                - React Components
    |   |   |-- home
    |   |   |   |-- home.js
    |   |   |   `-- index.js
    |   |   |-- index.js
    |   |   |-- layout.js
    |   |   `-- not-found.js
    |   |-- config                    - Runtime config
    |   |   |-- index.js              - Default config
    |   |   `-- production.js         - Production config
    |   |-- constants                 - Redux Constants
    |   |   `-- titles.js
    |   `-- reducers                  - Redux Reducers
    |       |-- index.js
    |       `-- titles.js
    |-- public                        - Built app for production
    |   |-- bundle.js                 - Built Javascript
    |   |-- bundle.js.map             - Source map for Built Javascript
    |   |-- imgs                      - Static images
    |   `-- index.html                - Same entrance in 'assets'
    |-- LICENSE                       - Copyright notice
    |-- README.md                     - This file
    |-- package.json                  - Package informations
    |-- docker-compose.yaml           - Dock Compose configuration
    |-- gulpfile.js                   - Gulp task defination
    |-- webpack-config.js             - Development build configuration
    `-- webpack-production-config.js  - Production build configuration

## Known Issues

### All of codes are 'import' by relative path.

Becuase of [Jest is not playing well with webpack](http://stackoverflow.com/questions/31547587/testing-webpack-built-react-components-with-jest),
and the Jestpack solution is not good enough for me, so I decide to use
relative path to import codes so far.

A branch named `feature/absolute-require-path` is created for solving the issue,
but the branch can't pass unit testing, I'm still thinking in better solution.

And it seems break the hot module.
