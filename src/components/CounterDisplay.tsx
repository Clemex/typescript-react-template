import React from 'react';
import { FormattedMessage } from 'react-intl';
import { WithStyles, Typography } from 'material-ui';
import { StyleRules } from 'material-ui/styles';

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
          <Typography variant="display1">
            <FormattedMessage {...this.props.label } values={{value:this.props.value}}/>
          </Typography>
        </div>
    );
  }
}