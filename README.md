# A Template for TypeScript Projects using React and Redux

This project is a simple template project developed by [Clemex Technologies](https://github.com/Clemex) for bootstrapping new React/Redux applications using TypeScript. We started from the [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter) from Microsoft and added several libraries and a more complete example application. 

The project contains the source code for a simple counter application that demonstrates the usage of React, Redux, Redux-Form, Redux-Logger, Material-UI, and React-UI all written in TypeScript. This was inspired by [the Counter project by Leyka](https://github.com/Leyka/learning-react/tree/master/react-redux) a simple app which increments or decrements a counter using React/Redux which in turn was based on [the React/Redux counter example](https://github.com/reactjs/redux/tree/master/examples/counter/src).

You can [try out this sample project here](https://clemex.github.io/typescript-react-template/).

# Motivation

[React](typescriptlang.org) is a very powerful UI creation framework for JavaScript applications, and [Redux](https://redux.js.org/) is a useful and simple state management system for JavaScript applications. 

At [Clemex](https://github.com/Clemex) we have found that React and Redux works very well with [TypeScript](typescriptlang.org), but it is not yet obvious what libraries work best with this stack for production code, and what the best practices are for producing scalable code. This project has served as a test bed for us when developing new features, and experimenting with different techniques. 

There are a couple of pre-existing React/Redux/TypeScript starters and template projects such as the [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter) we started from, but we wanted to create a starter kit that more closely resembled our development stack and that would make it easier for new team members to onboard.  

# Building and Running the Project

After cloning the repository from GitHub use the command `npm install` to install all of the tools and dependencies. 

The command `npm run start` will compile and launch the project in your browser at the location `http://localhost:3000/` with a watcher which will rebuild the project whenever any source file is changed. 

You can use `npm run build` to create a production build. For more build options take a look at the `package.json` file.

# Libraries

This project demonstrates the use of the following libraries in TypeScript: 

* [React](https://github.com/Clemex/typescript-react-template) - UI Front-end 
* [React Intl](https://github.com/yahoo/react-intl) - Application internationalization support 
* [Redux](https://redux.js.org/) - Centralized state management
* [Redux Form](https://redux-form.com/7.2.1/) - Form state management via Redux
* [Redux Logger](https://github.com/evgenyrodionov/redux-logger) - Redux logger middleware
* [Material UI](https://www.material-ui.com/) - React components that implement Google's Material Design

## Development Tools

At Clemex we are using the following development tools:

* [NPM](https://www.npmjs.com/) : Node Package Manager 
* [Node](https://nodejs.org) : JavaScript runtime built on Chrome's V8 JavaScript engine 
* [TypeScript](https://www.typescriptlang.org/) : Statically typed Javascript that compiles to plain Javascript
* [TS-Lint](https://palantir.github.io/tslint/) : Linter for the TypeScript language
* [Webpack](https://webpack.js.org/) : Let you bundle JavaScript files for usage in a browser (needed for React)
* [Jest](https://facebook.github.io/jest/) : Test all JavaScript code including React applications
* [React Developer Tools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
* [Redux DevTools for Chrome](https://chrome.google.com/webstore/detail/redux-devtools)
* [Visual Studio Code](https://code.visualstudio.com/) : Source code editor by Microsoft for Windows, Linux and macOS

## Contributing

If you find any issues or have ideas for improvements we would love to hear from you. You can either log an [issue/improvement](https://github.com/Clemex/typescript-react-template/issues), or submit a [pull request](https://github.com/Clemex/typescript-react-template/pulls). 

## Additional Resources

Here are some useful links for learning specifically more about TypeScript, React, and Redux on the internet. 

* [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter) from Microsoft
* [TypeScript React Conversion Guide](https://github.com/Microsoft/TypeScript-React-Conversion-Guide) from Microsoft
* [Static Typing in React & Redux using TypeScript](https://github.com/piotrwitek/react-redux-typescript-guide) by Piotr Witek
* [Typesafe Action Creation for Redux](https://github.com/piotrwitek/typesafe-actions) by Piotr Witek
* [TypeScript Guide for Material UI Next](https://material-ui-next.com/guides/typescript/) from Material UI
* [React JavaScript to TypeScript Transform](https://github.com/lyft/react-javascript-to-typescript-transform) from Lyft
* [Getting Started with React and TypeScript](https://javascriptplayground.com/react-typescript/) by Jack Franklin
* [TypeScript, React, and Redux](http://www.mattgreer.org/articles/typescript-react-and-redux/) by Matt Greer
* [TypeScript at Slack](https://slack.engineering/typescript-at-slack-a81307fa288d) by Felix Rieseberg
* [TypeScript at Lyft](https://eng.lyft.com/typescript-at-lyft-64f0702346ea) by Mohsen Azimi


