/** 
 * This is the main entry point of your React application. 
 * The React application is a React component like any other react components. 
 */
import * as React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider, FormattedMessage, defineMessages } from 'react-intl';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createMuiTheme, List, ListItem, ListItemText, Typography, Grid, Toolbar, Button, Paper } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Theme } from 'material-ui/styles';
import { blue } from 'material-ui/colors';
import { SimplePageLayout } from './SimplePageLayout';
import { CounterForm } from './CounterForm';
import { CounterContainer, counterReducer } from './CounterContainer';
 
/** Localizable strings defined using react-intl. */
const messages = defineMessages({
  headline: {
    id: "headline",
    defaultMessage: "TypeScript React Template Application" ,
  },
  subheading: {
    id: "subheading",
    defaultMessage: "brought to you by"  
  },
  forkme: {
    id: "forkme",
    defaultMessage: "Fork me on GitHub!"
  },
  light: {
    id: "light",
    defaultMessage: "Light"
  },
  dark : {
    id: "dark",
    defaultMessage: "Dark"
  }
});

/** 
 * Reducers define how to update the redux store: an immutable object that contains most of the application data. 
 */
const rootReducer = combineReducers({
    counter: counterReducer,
    form: formReducer,
  })

/** 
 * An example of using overrides to control the style of Material UI component  
 */
const themeOverrides = {
  MuiPaper: {
    root: {
      padding: '10px'
    }
  }
}

/** 
 * Defines the style and palette settings for the light theme. 
 */
const lightTheme = createMuiTheme({
  palette: { type: 'light', primary: blue },
  overrides: themeOverrides, 
});

/** 
 * Defines the style and palette settings for the dark theme. 
 */
const darkTheme = createMuiTheme({
  palette: { type: 'dark', primary: blue },
  overrides: themeOverrides, 
});

/**
 * Create the Redux middleware (https://redux.js.org/docs/advanced/Middleware.html). 
 * Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer
 * Note: logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions
 */
const middleware = applyMiddleware(createLogger({}));

/** 
 * This is the globabl redux store. This is an immutable object where most of the application data is stored. 
 * Updating the redux store is done by triggering "reducers" that are launched by actions. 
 * For additional data see the AppState object. 
*/
const store = createStore(rootReducer, middleware);

/** 
 * There are no properties in the main application: nobody passes it anything. 
 */
export type AppProperties = { }

/** 
 * This is a state object for the whole Theme information is stored in app state. Optionally this could have been added to the store and added it 
 * as its own reducer, but it would have added a lot of additional complexity for a simple string value. 
 */
export type AppState = { theme: Theme };

/** 
 * The entry point of the application.  
 */
export class App extends React.PureComponent<AppProperties, AppState> 
{
  state: AppState = { theme: lightTheme }
  
  setLightTheme = () => { this.setState({ theme: lightTheme }); }
  setDarkTheme = () => { this.setState({ theme: darkTheme }); }
  
  render(): React.ReactNode 
  {
    const header = (
      <Toolbar>
        <div style={{flex:1}}>
            <Typography variant="headline">
                <FormattedMessage {...messages.headline}/>
            </Typography>
            <Typography variant="subheading">
              <FormattedMessage {...messages.subheading}/> <a href="http://clemex.com">Clemex</a>
            </Typography>
        </div>
        <a href="https://github.com/clemex/typescript-react-template">
            <Button><FormattedMessage {...messages.forkme}/></Button>
        </a>
      </Toolbar>
    );

    const sidebar = (
      <Paper elevation={4}>
          <ListItem button onClick={this.setLightTheme}>
            <ListItemText primary="light"/>
          </ListItem>
          <ListItem button onClick={this.setDarkTheme}>
            <ListItemText primary="dark"/>
          </ListItem>
        </Paper>);   

    const main = (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <CounterContainer/>
        </Grid>
       <Grid item xs={12}>
          <CounterForm/>
        </Grid>        
      </Grid>);

    return (
      <Provider store={store}>
        <IntlProvider locale="en">
          <MuiThemeProvider theme={this.state.theme}>
            <SimplePageLayout
              main={main}
              sidebar={sidebar}
              header={header}
            />
          </MuiThemeProvider>
        </IntlProvider>
      </Provider>
    );
  }
}