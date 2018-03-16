import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { TitleText } from '../ui-shared/';
import { WithStyles, withStyles } from 'material-ui';

/** The property of the CounterDisplay component. */
export interface CounterDisplayProps {
  value: number;
  label: string;
}

/** A style object that leverages the current theme. */
const style = (theme) => ({
  root: {
    color: theme.palette.primary[500]
  }
});


/** A component that prints out the counter value. */
export class CounterDisplayBase extends React.PureComponent<CounterDisplayProps & WithStyles<'root'>> {
  render() {
     return (
        <div>
          <TitleText className={this.props.classes['root']}>
            <FormattedMessage {...this.props.label } values={{value:this.props.value}}/>
          </TitleText>
        </div>
    );
  }
}

/** A version of the counter display with the style injected  */
export const CounterDisplay = withStyles(style)(CounterDisplayBase);