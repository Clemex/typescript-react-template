import * as React from 'react';

export type TestProperties = {
}
export class Test extends React.PureComponent<TestProperties> {
  render(): React.ReactNode {
     return (
        <div {...this.props}/>
      );
  }
}
