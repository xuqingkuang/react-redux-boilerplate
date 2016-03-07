# React Redux Boilerplate

Another template that makes React and redux web app developmet easier.

## Demo

[Click here for demo](http://xuqingkuang.github.io/react-redux-boilerplate)

## Features

* React 0.14
* React Router 0.14
* Redux 3.0 (Predictable state container)
* Redux Devtools for Chrome Extension supported
* Node 5 Compatible
* Babel 6 for ES6 support
* Jest (Unit testing framework)
* Browser Live Reload based on react-transform-hmr, it build codes pretty fast!
* CSS / HTML / JS minification / Image optimization when built
* JS code duplication removal during built
* Code is minimized and pure write with Coffee and cjsx for better extension, focused on core features only.

If you are interested, please read the `package.json` file for all installed modules.

Feel free to contribute or fork it if you find this repo could help the community.

## Installation

### Requirements

* Node 5.0 is required for better experiences, previous versions maybe compatible but not tested yet.
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
    |   |-- imgs - Images             - Sample Images
    |   `-- index.html                - Entrance html
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
