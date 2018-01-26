import * as React from 'react';
import { List } from './List';
import { Clickable } from './Clickable';
import { SpanText } from './SpanText';
import { Game } from './Game6';
import { Page } from './Page';

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

import { createStore } from 'redux';

const initialState = {
    counter: 0,
};
    
const reducer = (state = initialState, action: {type: string, payload: number}) => {
    switch (action.type) {
        case 'ADD' : 
            return { ...state, counter: state.counter + action.payload }
        case 'REPLACE': 
            return { ...state, counter: action.payload }
        default : 
            return state;
    }
};

const store = createStore(reducer);

export const Demo: React.SFC = () => (
    <IntlProvider>
        <Provider store={store}>
            <ReduxCounter/>
        </Provider>
    </IntlProvider>
)