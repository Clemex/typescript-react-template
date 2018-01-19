# A Template for TypeScript Projects using React, Redux, and Fabric

This project is a template project developed by Clemex Technologies for bootstrapping new react/redux applications in TypeScript. We started from the [TypeScript React Starter] from Microsoft. (https://github.com/Microsoft/TypeScript-React-Starter). 

To understand this project and how it is configured please read:
1. [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter). 
2. [Create React App User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

# Building and Running the Project

The command `npm run start` from a terminal (or shell) will compile and launch the project in your browser at the location `http://localhost:3000/` with a watcher which will rebuild the project whenever any source file is changed. 

### Libraries

We are using the following libraries: 

* React
* Redux - without react-redux module
* Fabric.js
* Material UI

### Development Tools

We are using the following development tools:

* Webpack
* Babel
* TypeScript
* TS-Lint
* Node
* NPM 
* Jest
* create-react-app 
* Redux DevTools for Chrome
* Visual Studio Code

# Development Principles

The principle we are developing from are:
* DRY (Don't Repeat Yourself)
* YAGNI (You Aren't Going to Need It)
* KISS (Keep it Stupidly Simple)
* Don't make me think

Also see the [Zen of Python](https://www.python.org/dev/peps/pep-0020/). 

# Reading List

The following are a list of interesting articles related to the technology stack and the intersections of different technologies.  
## React 

* [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
* [React Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* [Flux in Depth Overview](http://facebook.github.io/flux/docs/in-depth-overview.html#content)

## React with Redux

* [Redux used with React](http://www.mattgreer.org/articles/typescript-react-and-redux/)

## Redux With Fabric

* [Redux with Fabric](https://stackoverflow.com/questions/37742465/how-to-make-friends-fabric-js-and-redux?noredirect=1&lq=1)

## React with TypeScript

* [React with TypeScript](https://github.com/Mercateo/react-with-typescript)
* [React and Redux with TypeScript guide](https://github.com/piotrwitek/react-redux-typescript-guide)
* [TypeScript React Conversion Guide](https://github.com/Microsoft/TypeScript-React-Conversion-Guide)
* [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter)
* [React JavaScript to TypeScript Transform](https://github.com/lyft/react-javascript-to-typescript-transform)
* [Getting Started with React and TypeScript](https://javascriptplayground.com/react-typescript/)types/react-redux
* [React & Redux in TypeScript - Component Typing Patterns](https://piotrwitek.github.io/react-redux-typescript-guide/)

For trouble-shooting:

* [TypeScript, React, and Redux](http://www.mattgreer.org/articles/typescript-react-and-redux/)

## Redux with TypeScript

* [Typesafe Action Creation for Redux](https://github.com/piotrwitek/typesafe-actions)

## TypeScript

* [TypeScript Tutorial](https://www.typescriptlang.org/docs/tutorial.html)
* [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/content/docs/getting-started.html)
* [TypeScript Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

## FAQ

Q: Can I have support for [Hot Reloading](https://gaearon.github.io/react-hot-loader/) for React?

A: There is a project that [demos this on Github](https://github.com/Glavin001/react-hot-ts) but the [issues reported](https://github.com/Glavin001/react-hot-ts/issues) make me think it is not a good idea. If you want to experiment with this I suggest creating a branch and trying it out. You will have to run [`npm run eject` from the create-react-app tool](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) to abandon using the scripts for managing the configuration. 