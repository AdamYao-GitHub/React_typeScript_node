<h2 align="center">React + Type Script + NodeJS + express + Postgeress</h2>

## Introduction
Step by step buid the application with react, typescript, nodeSJ, express, postgres

## Prerequisites

-   Git (v2.2+)
-   Node.js (v10.0+)
-   NPM (v6.0+)
-   TypeScript()
-   React()
-   Express()
-   postgres()

##Initial Evironment
-   Step 1: nodeJS init
    Run command `npm init`
    Automatically generate "package.json"               // Generate the configure file of the application
-   Step 2: install express and initialize express
    Run command `npm i --save express`
    New JS file called "server.js" and put default server setting into the file.
    Port: `5000`
    Main Path: `\`
    API Path: `\API`
-   Step 3: install nodemon
    Nodemon: https://www.npmjs.com/package/nodemon
    Run command `npm i --save -D nodemon`
    Add script in "package.json"
    `"nodemon": "nodemon sever.js"`
    Run command `npm run nodemon`
-   Step 4: install React
    Run command `npm i --save react react-dom`          //install react and react-dom
-   Step 5: install webpack
    Run command `npm i --save -D webpack webpack-dev-server webpack-cli --verbose`
-   Step 6: install babel
    Let JSX into ES6 javascript and then let ES6 into ES5
    Run command `npm i --save -D --verbose babel-core babel-loader@7 babel-preset-es2015 babel-preset-react babel-preset-react-hmre babel-preset-stage-2`
    watch consider the version support here will use v.7+ of babel-loader
-   Step 7: Generate enterance file and main JS for application
    Generate "index.html" and include the main JS and main DOM element;
    Generate "./client/app.js" for main reat JS file
    Generate "./component/main.jsx" for main content JSX file
-   Step 8: install/config typescript
    Run command `npm i typescript ts-loader --save -D --verbose`
    Run command `npm i @types/react @types/react-dom --save --verbose`
    Generate "./tsconfig.json" for the typescript config;
    Tips: rootDir, let the final compliation files keep the origin directory structure under the compilation folder;
-   Step 9: Add other auxiliary plug-in
    Run command `npm i cpx --save -D --verbose`
    Add CPX script for moving the sources files into the complie folder;
    `"cpx \"./client/**/*.!(tsx|less)\" dist/"`

