import * as React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { IntlProvider } from 'react-intl';
import { createLogger } from 'redux-logger';
import { CounterContainer, counterReducer } from './components/CounterContainer';
 
// Combine the reducers 
const rootReducer = combineReducers({
    // The application specific reducer
    counter: counterReducer,

    // Used for redux form 
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer,
  })

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

// The main component.  
export const App: React.SFC = () => (
    <IntlProvider locale="en">
        <Provider store={store}>
            <CounterContainer/>
        </Provider>
    </IntlProvider>
)
