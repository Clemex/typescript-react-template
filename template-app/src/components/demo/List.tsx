import * as React from 'react';

// Data associated with a string id
export interface ListProps<T> {
  elements: T[];
}

// Wraps elements in a list 
export class List<T> extends React.Component<ListProps<T>> {
  render() {
    // Extract the children and the attributes for this tag
    return this.props.elements.map((e, i) => (
      <li key={i}>
        {e}
      </li>      
    ));
  }
}