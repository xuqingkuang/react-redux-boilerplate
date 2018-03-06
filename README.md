# React Redux Boilerplate

[![Build Status](https://travis-ci.org/xuqingkuang/react-redux-boilerplate.svg?branch=master)](https://travis-ci.org/xuqingkuang/react-redux-boilerplate)
[![codecov.io](https://codecov.io/github/xuqingkuang/react-redux-boilerplate/coverage.svg?branch=master)](https://codecov.io/github/xuqingkuang/react-redux-boilerplate?branch=master)
[![Dependency Status](https://david-dm.org/xuqingkuang/react-redux-boilerplate.svg)](https://david-dm.org/xuqingkuang/react-redux-boilerplate)
[![devDependency Status](https://david-dm.org/xuqingkuang/react-redux-boilerplate/dev-status.svg)](https://david-dm.org/xuqingkuang/react-redux-boilerplate#info=devDependencies)

Another template that makes React and redux web app developmet easier.

> Babel 6 version was stopped maintenance, please look at [v1.0.0](https://github.com/xuqingkuang/react-redux-boilerplate/releases/tag/v1.0.0) if you need.
> React 15 version was stopped maintenance, please look at [v2.0.0-beta.3](https://github.com/xuqingkuang/react-redux-boilerplate/releases/tag/v2.0.0-beta.3) if you need.

## Demo

[Click here for demo](http://xuqingkuang.github.io/react-redux-boilerplate)

## Features

* TypeScript 2
* Unit testing covered with Jest
* Different configs for different environment.
* React 16
* React Router 4
* Redux 3.7 (Predictable state container)
* Sass css pre-processor with lint
* Webpack 4 + webpack-dev-server next
* Redux Devtools for Chrome Extension supported (Better than redux-logger)
* Browser live reload
* Package size analysis with webpack-bundle-analyzer

If you are interested, please read the `package.json` file for all installed modules.

Feel free to contribute or fork it if you find this repo could help the community.

## Installation

### Requirements

* Node 8 LTS for building

### Start

1. Clone the repo - `$ git clone https://github.com/xuqingkuang/react-redux-boilerplate`
2. Install the dependencies - `$ cd react-redux-boilerplate && npm install`

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
    |   |-- index.tsx                 - Entrance Javascript
    |   |-- prepare.ts                - App preparings, init history and store.
    |   |-- constants.ts              - Redux constants
    |   |-- actions                   - Redux actions
    |   |   |-- __tests__             - Unit testing folder, following are same
    |   |   |   `-- titles-test.ts
    |   |   |-- index.ts
    |   |   `-- titles.ts
    |   |-- components                - React Components
    |   |   |-- home
    |   |   |   |-- index.tsx
    |   |   |   `-- welcome.tsx
    |   |   |-- index.ts
    |   |   |-- app.tsx               - Application and reoutes
    |   |   |-- app.scss              - Sass for layout.tsx
    |   |   `-- not-found.tsx
    |   |-- config                    - Runtime config
    |   |   |-- index.ts              - Default config
    |   |   `-- production.ts         - Production config
    |   `-- reducers                  - Redux Reducers
    |       |-- index.ts
    |       `-- titles.ts
    |-- dist                          - Built app for production
    |   |-- app.js                    - Built Javascript
    |   |-- app.js.map                - Source map for Built Javascript
    |   |-- imgs                      - Static images
    |   `-- index.html                - Entrance html
    |-- .travis.yml                   - Travis CI config
    |-- LICENSE                       - Copyright notice
    |-- README.md                     - This file
    |-- package.json                  - Package informations
    |-- webpack.config.js             - Development build configuration
    |-- webpack-production.config.js  - Production build configuration
    `-- webpack-vendor.config.js      - Pre build the libraries
