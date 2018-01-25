import * as React from 'react';

interface ClickEvent {
    (): void;
}

// Demonstrates adding ClickEvent to any component
export function Clickable<T extends React.StatelessComponent>(Component: T, ck: ClickEvent): React.SFC {
    return (properties: any) => (
        <Component {...properties} onClick={(evt: any) => ck()} />
    );
}
