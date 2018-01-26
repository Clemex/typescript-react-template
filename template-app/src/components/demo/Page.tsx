import * as React from 'react';

export type ChildProperties = {
  msg: string;
}
export class Child extends React.PureComponent<ChildProperties> {
  render(): React.ReactNode {
     return this.props.msg;
  }
}

export type TestProperties = {     
    msg: string;
}
export class Test extends React.PureComponent<TestProperties> {
  render(): React.ReactNode {
     return (<Child {...this.props}/>);
  }
}

export type PageProperties = {
}
export class Page extends React.PureComponent<PageProperties> {
  render(): React.ReactNode {
     return (
        <html><Head></Head></html>
      );
    }    
}

export type HeadProperties = {
  
}
export class Head extends React.PureComponent<HeadProperties> {
  render(): React.ReactNode {
     return (<Child {...this.props}/>);
  }
}
