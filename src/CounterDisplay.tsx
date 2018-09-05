/**
 * An example of a simple TypeScript react component that is styled using Material UI.
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { WithStyles, Typography } from 'material-ui';
import { StyleRules, withStyles } from 'material-ui/styles';

/** 
 * This specifies the programmatic names of the different classes used to define styling rules. 
 * The convention is to use one name that is 'root'. Multiple names are separated using the '|' 
 * type union operator. 
  */
type ClassKeys = 'root';

/** These are the styling rules used. */
export const styles: StyleRules<ClassKeys> = {
  root: {
    backgroundColor: 'lightGray',
    fontWeight: 'bold',
    padding: 5
  }
}

/**
 * Contains the minimum information to display the counter value: a label and a value.   
 * Notice The label of the counter is a Message descriptor, not a string. 
 * This makes internationalization of your application easier, and it makes finding or changing strings easier.  
 */
export interface CounterDisplayProps {
  value: number;
  label: FormattedMessage.MessageDescriptor;
}

/**
 * This displays 
 */
export class CounterDisplayBase extends React.PureComponent<CounterDisplayProps & WithStyles<ClassKeys>> {
  render(): React.ReactNode {
     return (
        <Typography className={this.props.classes.root} variant="title">
          <FormattedMessage {...this.props.label } values={{value:this.props.value}}/>
        </Typography>
    );
  }
}

export const CounterDisplay = withStyles(styles)(CounterDisplayBase);