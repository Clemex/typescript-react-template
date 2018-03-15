import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../ui-shared/';

/** The property of the CounterDisplay component. */
export interface CounterDisplayProps {
  value: number;
  label: string;
}

/** A component that prints out the counter value. */
export class CounterDisplay extends React.PureComponent<CounterDisplayProps> {
  render() {
     return (
        <Text type="display1">
          <FormattedMessage {...this.props.label } values={{value:this.props.value}}/>
        </Text>
    );
  }
}