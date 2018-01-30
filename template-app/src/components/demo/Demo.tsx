import * as React from 'react';
import { List } from './List';
import { Clickable } from './Clickable';
import { SpanText } from './SpanText';
import { Game } from './Game6';
import { Page } from './Page';
import { reducer as formReducer } from 'redux-form';

//import * as MaterialUIForm from './MaterialUIForm';

const nums = [1, 1, 2, 3, 5, 8, 13];
const HelloWorld = SpanText('Hello world');
const ClickMe = Clickable(SpanText('Click me'), () => alert('clicked'));
 
/*
export const Demo: React.SFC = () => (
    <div> 
        <div>      
            <List elements={nums}/>
        </div>
        <div>
            <HelloWorld/> 
        </div>
        <div>
            <ClickMe/>
        </div>
        <div>
            <Game/>
        </div>
    </div>
);
*/

import {IntlProvider} from 'react-intl';
import ReduxCounter from './ReduxCounter';
import { Provider } from 'react-redux';

// Before used to be <Page/>

import { createStore, combineReducers } from 'redux';
import { ContactForm } from './ContactForm';
import MaterialUIForm from './MaterialUIForm';
import { MaterialUITextFieldDemo } from './MaterialUITextFieldDemo';

const initialState = {
    counter: 0,
};


const counterReducer = (state = initialState, action: {type: string, payload: number}) => {
    switch (action.type) {
        case 'ADD' : 
            return { ...state, counter: state.counter + action.payload }
        case 'REPLACE': 
            return { ...state, counter: action.payload }
        default : 
            return state;
    }
};

const rootReducer = combineReducers({
    counter: counterReducer,

    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer
  })
    

const store = createStore(rootReducer);

/*
export const Demo: React.SFC = () => (
    <IntlProvider>
        <Provider store={store}>
            <ReduxCounter/>
        </Provider>
    </IntlProvider>
)
*/

/*
export const Demo: React.SFC = () => (
    <IntlProvider>
        <Provider store={store}>
            <ContactForm onSubmit={x => console.log(x)}/>
        </Provider>
    </IntlProvider>
);
*/
export const Demo: React.SFC = () => (
    <IntlProvider locale="en">
        <Provider store={store}>
            <MaterialUITextFieldDemo/>
        </Provider>
    </IntlProvider>
);
