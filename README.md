[![Build Status](https://travis-ci.org/chkakaja/Symantixs.svg?branch=master)](https://travis-ci.org/chkakaja/sentimize)
[![Stories in Ready](https://badge.waffle.io/chkakaja/sentimize.png?label=ready&title=Ready)](https://waffle.io/chkakaja/sentimize)
# Symantix

  Symantix provides human emotion and speech analysis through video recording for interviews and training.

## Table of Contents
1. [Usage](#Usage)
2. [Getting started](#Getting-Started)
  1. [Clone the latest version](#Installing-Dependencies)
  2. [Install Dependencies](#Installing-Dependencies)
  3. [Setup Environment Variables](#Environment-Variables)
  4. [Start the application](#Start-application)
3. [Technologies](#Technologies)
4. [Architecture](#Architecture)
5. [Team](#Team)
6. [Contributing](#Contributing)

## Usage
Landingpage:
![landing](https://cloud.githubusercontent.com/assets/2279902/16827321/4735066c-493a-11e6-9315-4ec8b29c73e2.png)
Payment:
![stripepay](https://cloud.githubusercontent.com/assets/2279902/16827322/4735b620-493a-11e6-9fd4-44a214fc390b.png)
Concepts Visualization:
![concepts](https://github.com/LimpkinBeastMaster/Symantix/blob/master/bubbles.png)
Home:
![screen shot 2016-06-06 at 20 08 50](https://cloud.githubusercontent.com/assets/10008938/15844927/334263b8-2c23-11e6-94f4-d9a040efdfd1.png)
Record:
![screen shot 2016-06-06 at 20 10 18](https://cloud.githubusercontent.com/assets/10008938/15844922/2cdbb236-2c23-11e6-9f2d-4adf4d9b0f79.png)
Graphs:
![screen shot 2016-06-06 at 20 09 39](https://cloud.githubusercontent.com/assets/10008938/15844923/2f5013c2-2c23-11e6-8608-607eff0c4da8.png)
Session Overview:
![screen shot 2016-06-06 at 20 09 18](https://cloud.githubusercontent.com/assets/10008938/15844924/3144420c-2c23-11e6-920e-c4ebdc5dea55.png)

## Getting started

#### 1. Clone the latest version

  Start by cloning the latest version of Symantixs on your local machine by running:

  ```sh
  $ git clone https://github.com/LimpkinBeastMaster/sentimize.git
  $ cd symantix
  ```

#### 2. Install Dependencies
  From within the root directory run the following command to install all dependencies:

  ```sh
  $ npm install
  ```

#### 3. Setup Environment Variables

##### Server side setup

  1. Copy and save the  ``` example.env ``` file in the env folder as ``` development.env ```.
  2. Replace the port with your desired port and enter the login credentials for your MySQL server (make sure it is running)

##### Client side setup

  1. Create a free account on http://face.sightcorp.com/ and create a new application for a new App Key.
  2. Copy and save the  ``` client-config.example.js ``` file in the env folder as ``` client-config.js ```.
  3. Enter and save your Client ID and App Key in the ``` client-config.js ``` file.

#### 4. Run the application

  1. Create a build folder within client/build. From within the root directory run the following command to make sure Browserify builds the bundle file and rebuilds on every change with Watchify:

  ```sh
  $ npm run bundle
  ```

  2. In a new terminal window run the following command to start the application:

  ```sh
  $ npm start
  ```

  After that open in your browser the localhost with your chosen port, e.g. ``` http://localhost:4568/ ``` to access the application.

#### 5. Run tests

  Configure the environment variable `NODE_ENV` prior to running tests.

   ```sh
  $ export NODE_ENV=development
  $ npm test
  ```

  You may use `npm run test-client` or `np run test-server` to run front-end and back-end tests independently.

## Technologies

##### Front end:
- React
- Face Analysis Cloud Engine API by Sightcorp
- Browserify
- Chartjs
- Babel

##### Back end:
- Node
- Express
- Jade
- Bookshelf/Knex
- MySQL
- Passport

##### Testing:
- Mocha
- Chai
- jsdom

##### Continuous Integration:
- Travis CI

##### Deployment:
- Digital Ocean Droplet
- pm2: Production Process Manager

## Architecture
![symantix](https://cloud.githubusercontent.com/assets/10008938/15795587/c0bfd19a-29a7-11e6-9402-de7dabdf1526.png)

<!-- ### Database Schema
<b> to be added </b> -->

## Directory Layout
```
├── /env/                       # Environment variables
├── /node_modules/              # 3rd-party libraries and utilities
├── /client/                    # Client source code
│   ├── /build/                 # Build file produced with Browserify
│   ├── /components/            # React components
│     ├── /home-view/           # Home view components
│     ├── /main-layout/         # Main Layout components
│     ├── /record-view/         # Record view components
│     ├── /report-view/         # Reporting view components
│     ├── /App.jsx/             # Main React App
│   ├── /lib/                   # Lib files, e.g. from FACE API
│   ├── /style/                 # CSS Style files
│   ├── /index.jsx              # Index file to attach React to DOM
├── /server/                    # Server source code
│   ├── /config/                # Initial server config files
│   ├── /controllers/           # Controllers for database interaction
│   ├── /lib/                   # Lib for util functions
│   ├── /models/                # Data models
│   ├── /routes/                # Routes for incoming GET and POST requests
│   ├── /views/                 # Jade templating views
│   └── /server.js              # Server-side startup script
├── /test/                      # Server and client side tests
│   ├── /client/                # Client side tests
│   ├── /server/                # Server side tests
|   ├── /data/                  # Holds seed & dummy data
└── package.json                # List of 3rd party libraries and utilities to be installed
└── .babelrc                    # Babel presets
└── .eslintrc                   # ESLint settings
```

## GOLD Team
  - Product Owner:            Ben Roa
  - Scrum Master:             Asif Ahmed
  - Development Team Members: Tim Do, Asif Ahmed, Albert Han, Ben Roa

## BLUE Team
  - Product Owner:            Christian Haug
  - Scrum Master:             Jack Zhang
  - Development Team Members: Christian Haug, Jack Zhang, Kani Munidasa, Katherine Hao


## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
