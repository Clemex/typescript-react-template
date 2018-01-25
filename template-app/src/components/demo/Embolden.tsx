import * as React from 'react';

// The input type may or may not have the following two attributes. 
// They are applied to the bold tag.
export interface AttributesProps {
  className?: string;
  style?: React.CSSProperties;
}

// Wraps the children in a Bold tag. 
export const Embolden: React.SFC<AttributesProps> = (props) => {   
  // Extract the children and the attributes for this tag
  const { children, ...attributes } = props;
  return (
    <b {...attributes}>
      {children}
    </b>
  );
};
