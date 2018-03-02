import * as React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { IntlProvider } from 'react-intl';
import { createLogger } from 'redux-logger';
import { CounterContainer } from '../components/Counter/CounterContainer';
import { CounterForm } from '../components/CounterForm';
import { counterReducer } from '../components/Counter/CounterReducer';
import { MainPage } from '../components/MainPage';
import { LabeledButton } from '../components/ui-shared/LabeledButton';
import { Text } from '../components/ui-shared/Text';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme, List, ListItem, ListItemText } from 'material-ui';
import { Theme } from 'material-ui/styles';
 
const rootReducer = combineReducers({
    counter: counterReducer,
    form: formReducer,
  })


const themeOverrides = {
  MuiPaper: {
    root: {
      padding: '10px'
    }
  }
}

// Create themes:
const lightTheme = createMuiTheme({
  palette: { type: 'light' },
  overrides: themeOverrides, 
});
const darkTheme = createMuiTheme({
  palette: { type: 'dark' },
  overrides: themeOverrides, 
});

// Creates a logger component 
// https://www.npmjs.com/package/redux-logger
const logger = createLogger({
    // ...options 
  });

// Apply the redux middleware
// https://redux.js.org/docs/advanced/Middleware.html
const middleware = applyMiddleware(
    // logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions 
    logger);

// Create a store with the combined reducers and middleware
const store = createStore(rootReducer, middleware);

// The main application
export type AppProperties = { }

// Theme information is stored in app state. Optionally this could have been added 
// as its own reducer, but it would have added a lot of additional complexity for a simple string value
// This is the simplest thing that could have worked 
export type AppState = { theme: Theme };

// The main application component, which stores theme information in a local state object. 
export class App extends React.PureComponent<AppProperties, AppState> 
{
  state: AppState = { theme: lightTheme }
  setLightTheme() { this.setState({ theme: lightTheme }); }
  setDarkTheme() { this.setState({ theme: darkTheme }); }
  render(): React.ReactNode 
  {
    const header = (<Text type="display2">Welcome to my first TypeScript React/Redux Application</Text>);

    const sidebar = (
      <List component="nav">  
        <ListItem button onClick={e => this.setLightTheme()}>
          <ListItemText primary="light"/>
        </ListItem>
        <ListItem button onClick={e => this.setDarkTheme()}>
          <ListItemText primary="dark"/>
        </ListItem>
      </List>
    );
    const content = (<div><CounterContainer/><CounterForm/></div>);

    return (
      <Provider store={store}>
      <IntlProvider locale="en">
        <MuiThemeProvider theme={this.state.theme}>
          <MainPage
            content={content}
            sidebar={sidebar}
            header={header}
          />
        </MuiThemeProvider>
      </IntlProvider>
    </Provider>);
  }
}

