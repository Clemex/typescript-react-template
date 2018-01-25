// A functional component factory 
// Generates components from functions

import * as React from 'react';

// The type of a render function for components that render based on properties and internal state
export interface RenderFunc<P, S> {
    (props: P, state: S) : React.ReactNode
}

// A Pure stateful component sounds 
export class PureStatefulComponent<P, S> extends React.PureComponent<P|null, S> 
{        
    // A function
    readonly renderFunc: RenderFunc<P, S>;

    // Pass in the the name of the constructor, the initial state, and the function that renders from state
    constructor(initialState: S, renderFunc: RenderFunc<P, S> ) {
        super(null);
        this.renderFunc = renderFunc;
        this.setState(initialState);
    }
    
    // Render function 
    render(): React.ReactNode {
        return this.renderFunc(this.props, this.state);
    }
}

// Given the class of the property, and initial state, and a render function, generates a stateful pure component
export function MakeStatefulComponent<P, S>(
    initialState: S, 
    renderFunc: RenderFunc<P, S>): PureStatefulComponent<P, S> 
{
    return new PureStatefulComponent(initialState, renderFunc);
}

// Given the class of the property, and initial state, and a render function, generates a stateful pure component
export function MakeStatelessComponent<P>(
    renderFunc: RenderFunc<P, {}>): PureStatefulComponent<P, {}> 
{
    return new PureStatefulComponent({}, renderFunc);
}

// Given an initial state, and a render function, generates a pure stateless component
export function MakeProplessComponent<S>(
    initialState: S, 
    renderFunc: RenderFunc<{}, S>): PureStatefulComponent<{}, S> 
{
    return new PureStatefulComponent(initialState, renderFunc);
}
