import * as React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider, defineMessages } from 'react-intl';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { createMuiTheme, List, ListItem, ListItemText } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Theme } from 'material-ui/styles';
import { blue } from 'material-ui/colors';

import { MainPage } from '../components/MainPage';
import { CounterForm } from '../components/CounterForm';
import { CounterContainer, counterReducer } from '../components/Counter/';
import { Display1Text } from '../components/ui-shared/';
 
/** The main 'reducer' for Redux state, which maps actions to state transforms. */
const rootReducer = combineReducers({
    counter: counterReducer,
    form: formReducer,
  })

/** An example of using overrides to control the style of Material UI component  */
const themeOverrides = {
  MuiPaper: {
    root: {
      padding: '10px'
    }
  }
}

/** Defines the style and palette settings for the light theme. */
const lightTheme = createMuiTheme({
  palette: { type: 'light', primary: blue },
  overrides: themeOverrides, 
});

/** Defines the style and palette settings for the dark theme. */
const darkTheme = createMuiTheme({
  palette: { type: 'dark', primary: blue },
  overrides: themeOverrides, 
});

/** Creates an instance of a redux-logger (https://github.com/evgenyrodionov/redux-logger) */
const logger = createLogger({});

/**
 * Create the Redux middleware (https://redux.js.org/docs/advanced/Middleware.html). 
 * Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer
 * Note: logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions
 */
const middleware = applyMiddleware(logger);

/** 
 * Creates a Redux store with the defined reducer and middleware.
*/
const store = createStore(rootReducer, middleware);

/** Localizable strings from React-intl. */
const messages = defineMessages({
  app_title: {
    id: "app_title",
    defaultMessage: "My First React/Redux Application in TypeScript",
  },
});

/**
 * Theme information is stored in app state. Optionally this could have been added 
 * as its own reducer, but it would have added a lot of additional complexity for a simple string value
 * This is the simplest thing that could have worked, and demonstrates how to use state
 * in a component. 
 */
export type AppState = { theme: Theme };

/** The main component for the application. It has no properties. The current theme is stored in AppState/ */
export class App extends React.PureComponent<{}, AppState> 
{
  state: AppState = { theme: lightTheme }
  setLightTheme = () => this.setState({ theme: lightTheme }); 
  setDarkTheme = () => this.setState({ theme: darkTheme });
  
  render(): React.ReactNode 
  {
    const header = (
      <Display1Text text={messages.app_title}/>);

    const sidebar = (
      <List component="nav">  
        <ListItem button onClick={this.setLightTheme}>
          <ListItemText primary="light"/>
        </ListItem>
        <ListItem button onClick={this.setDarkTheme}>
          <ListItemText primary="dark"/>
        </ListItem>
      </List>
    );
    const content = (<div><CounterContainer/><CounterForm/></div>);

    return (<Provider store={store}>
      <IntlProvider locale="en">
        <MuiThemeProvider theme={this.state.theme}>
          <MainPage
            main={content}
            sidebar={sidebar}
            header={header}
          />
        </MuiThemeProvider>
      </IntlProvider>
    </Provider>);
  }
}