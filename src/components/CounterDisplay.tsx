import React from 'react';
import { FormattedMessage } from 'react-intl';
import { WithStyles } from 'material-ui';
import { StyleRules } from 'material-ui/styles';
import { Text } from './Util'

type ClassKeys = 'root';

export const style: StyleRules<ClassKeys> = {
  root: {
    color: 'blue'
  }
}

export interface CounterDisplayProps {
  value: number;
  label: FormattedMessage.MessageDescriptor;
}

export class CounterDisplay extends React.PureComponent<CounterDisplayProps & WithStyles<ClassKeys>> {
  render(): React.ReactNode {
     return (
        <div className="root">
          <Text type="display1">
            <FormattedMessage {...this.props.label } values={{value:this.props.value}}/>
          </Text>
        </div>
    );
  }
}