import * as React from 'react';

// Creates a span with embedded text
export function SpanText(text: string): React.SFC {
    return (properties: any) => (
        <span {...properties}>{text}</span>            
    );
}