# A Template for TypeScript Projects using React, Redux, and Fabric

This project is a template project developed by Clemex Technologies for bootstrapping new React/Redux applications in TypeScript. We started from the [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter) from Microsoft. 

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- Install doctoc : npm install -g doctoc -->
<!-- And run the command: " doctoc readme.md "to update the ToC -->
# Table of Contents

- [Motivation](#motivation)
- [Project Structure](#project-structure)
- [Building and Running the Project](#building-and-running-the-project)
- [Libraries](#libraries)
    - [Development Tools](#development-tools)
- [Development Principles](#development-principles)
- [Reading List](#reading-list)
  - [React](#react)
  - [Redux](#redux)
  - [React with Redux](#react-with-redux)
  - [Redux With Fabric](#redux-with-fabric)
  - [Redux Form with Material UI](#redux-form-with-material-ui)
  - [Material UI with TypeScript](#material-ui-with-typescript)
  - [React with TypeScript](#react-with-typescript)
  - [Redux with TypeScript](#redux-with-typescript)
  - [TypeScript](#typescript)
- [Examples](#examples)
- [VS Code Support](#vs-code-support)
- [Best Practices](#best-practices)
- [FAQ](#faq)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Motivation

There are a couple of pre-existing React/Redux/TypeScript starters and template projects such as the [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter) we started from, but we wanted to create a starter kit that more closely resembled a real production development stack, and that contained a template example for new programmers onboarding on our team. 

# Project Structure 

1. `App.tsx` - The main entry point of the application 
1. `components\MainPage.tsx` - A presentation component which uses a `Grid` to layout a page
1. `components\Counter.tsx` - The presentational component for a counter which can be incremented, decremented, edited, and which supports undo/redo
1. `components\CounterContainer.tsx` - A redux-connected container component for the counter along with the relevant action and reducer
1. `components\shared.tsx` - Shared presentational components which wrap Material UI components

# Building and Running the Project

The command `npm run start` from a terminal (or shell) will compile and launch the project in your browser at the location `http://localhost:3000/` with a watcher which will rebuild the project whenever any source file is changed. 

# Libraries

This Boostrap project uses the following libraries: 

* [React](https://github.com/Clemex/typescript-react-template) - UI Front-end 
* [React Intl](https://github.com/yahoo/react-intl) - Application internationalization support 
* [React Router](https://github.com/ReactTraining/react-router) - Declarative URL routing 
* [Redux](https://redux.js.org/) - Centralized state management
* [Redux Form](https://redux-form.com/7.2.1/) - Form state management via Redux
* [Redux Logger](https://github.com/evgenyrodionov/redux-logger) - Redux logger middleware
* [Redux Promise](https://github.com/pburtchaell/redux-promise-middleware) - Robust handling of async code in Redux,  enables optimistic updates and dispatches pending, fulfilled and rejected actions. 
* [Redux Thunk](https://github.com/gaearon/redux-thunk) - Middleware for writing action creators that return a function instead of an action, used to chain async actions
* [Material UI](https://www.material-ui.com/) - React components that implement Google's Material Design
* [Fabric.js](https://www.fabricjs.com) - A powerful and simple Javascript HTML5 canvas library
* [JSS](https://github.com/cssinjs/jss) - Using JavaScript to describe styles in a declarative and maintainable way

### Development Tools

We are using the following development tools:

* [TypeScript](https://www.typescriptlang.org/) - Statically typed Javascript that compiles to plain Javascript
* [TS-Lint](https://palantir.github.io/tslint/) - Linter for the TypeScript language
* [Webpack](https://webpack.js.org/) - Let you bundle JavaScript files for usage in a browser (needed for React)
* [Node](https://nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [NPM](https://www.npmjs.com/) - Node Package Manager 
* [Babel](https://babeljs.io/) -  Tool that helps you write code in the latest version of JavaScript
* [Jest](https://facebook.github.io/jest/) - Test all JavaScript code including React applications
* [create-react-app](https://github.com/facebook/create-react-app) - Bootstrap React app
* [React Developer Tools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
* [Redux DevTools for Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
* [Visual Studio Code](https://code.visualstudio.com/) - Source code editor by Microsoft for Windows, Linux and macOS

# Development Principles

The principle we are developing from are:
* DRY (Don't Repeat Yourself)
* YAGNI (You Aren't Going to Need It)
* KISS (Keep it Stupidly Simple)
* Don't make me think

Also see the [Zen of Python](https://www.python.org/dev/peps/pep-0020/). 

# Reading List

The following are a list of interesting articles related to the technology stack and the intersections of different technologies.  

## TypeScript and React Starter 

1. [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter). 
2. [Create React App User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
3. [Static Typing in React & Redux using TypeScript](https://github.com/piotrwitek/react-redux-typescript-guide)

## React 

* [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
* [React Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* [Flux in Depth Overview](http://facebook.github.io/flux/docs/in-depth-overview.html#content)

## Redux 

* [Redux Tutorials (Youtube)](https://www.youtube.com/watch?v=1w-oQ-i1XB8&list=PLoYCgNOIyGADILc3iUJzygCqC8Tt3bRXt)

## React with Redux

* [Redux used with React](http://www.mattgreer.org/articles/typescript-react-and-redux/)

## Redux With Fabric

* [Redux with Fabric](https://stackoverflow.com/questions/37742465/how-to-make-friends-fabric-js-and-redux?noredirect=1&lq=1)

## Redux Form with Material UI

* [Redux Form with Material UI](https://redux-form.com/6.7.0/examples/material-ui/) - WARNING: we are using Material-UI next, which is a different API.

## Material UI with TypeScript

* [TypeScript Guide for Material UI Next](https://material-ui-next.com/guides/typescript/)

## React with TypeScript

* [React with TypeScript](https://github.com/Mercateo/react-with-typescript)
* [React and Redux with TypeScript guide](https://github.com/piotrwitek/react-redux-typescript-guide)
* [TypeScript React Conversion Guide](https://github.com/Microsoft/TypeScript-React-Conversion-Guide)
* [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter)
* [React JavaScript to TypeScript Transform](https://github.com/lyft/react-javascript-to-typescript-transform)
* [Getting Started with React and TypeScript](https://javascriptplayground.com/react-typescript/)

For trouble-shooting:

* [TypeScript, React, and Redux](http://www.mattgreer.org/articles/typescript-react-and-redux/)

## Redux with TypeScript

* [Typesafe Action Creation for Redux](https://github.com/piotrwitek/typesafe-actions)

## TypeScript

* [TypeScript Tutorial](https://www.typescriptlang.org/docs/tutorial.html)
* [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/content/docs/getting-started.html)
* [TypeScript Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

# Examples

* [Counter](https://github.com/Leyka/learning-react/tree/master/react-redux) - A simple app which increments or decrements a counter using React/Redux

# VS Code Support

We have provided a [Visual Studio Code snippet](https://code.visualstudio.com/docs/editor/userdefinedsnippets) for facilitating adding of components. 

# Best Practices

* We recommend using Classes over Stateless Functional Components (SFC) 
* Classes should by default derive from `PureComponent` 
* Minimize usage of state in a component, unless for purely presentation purposes
* If using state in a component, put it in a `state` member variable
* All changes to state in a component should happen through a function passed to the `setState` member function
* Minimize directly coupling of components to the various imported libraries 
* Avoid using `shouldComponentUpdate` if possible, use it as a last resort 
* Avoid using `default export`, names should be consistent across modules
* Prefer `const` over `let` and `var`, and prefer `let` over `var`
* By default make class members `readonly`
* Usually provide an exported named properties type
* Prefer lots of small components to large monolithic components
* Preferably import only the names you need from a module, not everything
* Document your code, especially when doing some non-idiomatic
* Use message objects, not raw strings, so that your UI can be easily internationalized and made accessible
* Two spaces for tabs in JS[X]/TS[X] code, four spaces for JSON
* Use ES-Lint with the recommended rules 

# FAQ

**Q**: Can I have support for [Hot Reloading](https://gaearon.github.io/react-hot-loader/) for React?

**A**: There is a project that [demos this on Github](https://github.com/Glavin001/react-hot-ts) but the [issues reported](https://github.com/Glavin001/react-hot-ts/issues) make me think it is not a good idea. If you want to experiment with this I suggest creating a branch and trying it out. You will have to run [`npm run eject` from the create-react-app tool](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) to abandon using the scripts for managing the configuration. 

**Q**: Why is fabric.js not being installed as a node module via NPM?

**A**: Installing it brings in a lot of dependencies and complexity to the build process. This is because the node package supports Canvas drawing in node applications, through a complex tool-chain. We are only using Fabric in browser applications (for now), and the main fabric.js file is self-contained and works well. 
