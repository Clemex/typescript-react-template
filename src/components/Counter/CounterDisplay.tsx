import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { WithStyles } from 'material-ui';

import { Text } from '../ui-shared/Text';

export interface CounterDisplayProps {
  value: number;
  label: string;
}

export class CounterDisplay extends React.PureComponent<CounterDisplayProps> {
  render() {
     return (
        <Text type="display1">
          <FormattedMessage {...this.props.label } values={{value:this.props.value}}/>
        </Text>
    );
  }
}