import * as React from 'react';

// The properties of the callback button
export type CallbackButtonProps = {
    callback: () => void;
    label: string;
};

// A simple stateless component with a callback and properties
export const CallbackButton: React.SFC<CallbackButtonProps> = 
(p: CallbackButtonProps) => (
    <button onClick={p.callback}>
        {p.label}
    </button>  
);
