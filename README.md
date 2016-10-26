# React Redux Boilerplate

[![Build Status](https://travis-ci.org/xuqingkuang/react-redux-boilerplate.svg?branch=master)](https://travis-ci.org/xuqingkuang/react-redux-boilerplate)
[![codecov.io](https://codecov.io/github/xuqingkuang/react-redux-boilerplate/coverage.svg?branch=master)](https://codecov.io/github/xuqingkuang/react-redux-boilerplate?branch=master)
[![Dependency Status](https://david-dm.org/xuqingkuang/react-redux-boilerplate.svg)](https://david-dm.org/xuqingkuang/react-redux-boilerplate)
[![devDependency Status](https://david-dm.org/xuqingkuang/react-redux-boilerplate/dev-status.svg)](https://david-dm.org/xuqingkuang/react-redux-boilerplate#info=devDependencies)

Another template that makes React and redux web app developmet easier.

## Demo

[Click here for demo](http://xuqingkuang.github.io/react-redux-boilerplate)

## Features

* TypeScript 2, no babel required
* Unit testing covered with Jest
* Different configs for different environment.
* React 15
* React Router 2.8
* Redux 3.6 (Predictable state container)
* Sass css pre-processor with lint
* Yarn supported
* Webpack 2 + webpack-dev-server 2
* Redux Devtools for Chrome Extension supported (Better than redux-logger)
* Browser live reload

If you are interested, please read the `package.json` file for all installed modules.

Feel free to contribute or fork it if you find this repo could help the community.

## Installation

### Requirements

* Node 6 LTS for building

### Start

1. Clone the repo - `$ git clone https://github.com/xuqingkuang/react-redux-boilerplate`
2. Install the dependencies - `$ cd react-redux-boilerplate && yarn`

## Executions

### Start develop environment

    $ npm start

Run `start` directly without any options will build the codes and start a
development web server on `http://0.0.0.0:8000`, then you can open a browser to
access the page with any IP address such as `http://localhost:8000`,
the codes in `src` will be compiled at run time when change anything, and the
browser will auto reload.

By the way, the step is running on memory, there's no any files generated.

### Unit test

    $ npm run test

Will call [Jest](http://facebook.github.io/jest) to execute the unit testing.

### Build the codes for production

    $ npm run build

The codes will be compiled and placed to `dist` folder, all of them are
minimized.

###  Clean the built folder

    $ npm run clean

The all files in `dist` folder will be removed.

## Structure

    react-redux-boilerplate           - Project root
    |-- __mocks__                     - Jest mocks, see package.json jest section.
    |   `-- file-mock                 - Mock for static handler
    |-- assets                        - Static resources
    |   |-- imgs                      - Static Images
    |   `-- index.html                - Entrance html
    |-- coverage                      - Testing coverage report generated
    |   `-- icov-report
    |       `-- index.html            - Graphic testing coverage report
    |-- src                           - Source codes
    |   |-- app.tsx                   - Entrance Javascript
    |   |-- prepare.ts                - App preparings, init history and store.
    |   |-- routes.tsx                - Routes config
    |   |-- constants.ts              - Redux constants
    |   |-- actions                   - Redux actions
    |   |   |-- __tests__             - Unit testing folder, following are same
    |   |   |   `-- titles-test.ts
    |   |   |-- index.ts
    |   |   `-- titles.ts
    |   |-- components                - React Components
    |   |   |-- home
    |   |   |   |-- home.tsx
    |   |   |   `-- index.tsx
    |   |   |-- index.ts
    |   |   |-- layout.tsx
    |   |   |-- layout.scss           - Sass for layout.tsx
    |   |   `-- not-found.tsx
    |   |-- config                    - Runtime config
    |   |   |-- index.ts              - Default config
    |   |   `-- production.ts         - Production config
    |   `-- reducers                  - Redux Reducers
    |       |-- index.ts
    |       `-- titles.ts
    |-- dist                          - Built app for production
    |   |-- bundle.js                 - Built Javascript
    |   |-- bundle.js.map             - Source map for Built Javascript
    |   |-- imgs                      - Static images
    |   `-- index.html                - Same entrance in 'assets'
    |-- .travis.yml                   - Travis CI config
    |-- LICENSE                       - Copyright notice
    |-- README.md                     - This file
    |-- package.json                  - Package informations
    |-- webpack.config.js             - Development build configuration
    `-- webpack-production.config.js  - Production build configuration
