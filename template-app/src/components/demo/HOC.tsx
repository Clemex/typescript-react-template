// A functional component factory 
// Generates components from functions

import * as React from 'react';

// This function will convert a function into a pure component. SFC (functions) used as components 
// in React are not efficient. We don't want to have two different syntaxes. 
// https://dev.to/danhomola/react-higher-order-components-in-typescript-made-simple
// The advantage of using a function is that it removes the temptation to make errors. 
export function pureSFC<P extends {}>(Component: React.StatelessComponent<P>): React.ComponentClass<P>
{
    return class PureSFC extends React.PureComponent<P> 
    {            
        // Render function 
        render(): React.ReactNode {
            return <Component {...this.props}/>;
        }
    }
}


