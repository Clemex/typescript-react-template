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

export const Demo: React.SFC = () => (
    <IntlProvider>
        <Page/>
    </IntlProvider>
)