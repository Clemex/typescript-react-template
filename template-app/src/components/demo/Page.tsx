import * as React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

const messages = defineMessages({
  app_title : {
    id: "app.title",
    defaultMessage: "Demo Application" ,
  },
});

export type Message = {
  id: string,
  defaultMessage: string,
}

export type PageProperties = {
} 
export class Page extends React.PureComponent<PageProperties> {
  render(): React.ReactNode {
     return (      
        <html>
          <Head title={messages.app_title}/>
          <Body />
        </html>
      );
    }    
}

export type HeadProperties = {
  title: Message;
}

export class Head extends React.PureComponent<HeadProperties> {
  render(): React.ReactNode {
    return (
      <head>
        <title><FormattedMessage {...this.props.title} /></title>
      </head>
    )
  }
}

export type BodyProperties = {
}
export class Body extends React.PureComponent<BodyProperties> {
  render(): React.ReactNode {
     return (
        <body>
        <h1>
          <FormattedMessage {...messages.app_title} />
        </h1>
        </body>
      );
  }
}