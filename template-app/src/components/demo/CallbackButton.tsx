import * as React from 'react';

// The properties of the callback button
export type CallbackButtonProps = {
    callback: (label: string) => void;
    label: string;
};

// A simple stateless component with a callback and properties
export const CallbackButton: React.SFC<CallbackButtonProps> = 
(p: CallbackButtonProps) => (
    <button onClick={(evt) => p.callback(p.label)}>
        {p.label}
    </button>  
);