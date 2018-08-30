import * as React from 'react';
import { WithStyles, withStyles, Paper } from 'material-ui';
import { NumberInput, LabeledButton } from "./Util";
import { StyleRules } from 'material-ui/styles';
import { defineMessages } from 'react-intl';
import { CounterDisplay } from './CounterDisplay';

// Localizable strirngs 
const messages = defineMessages({
  current_counter_label: {
    id: "current_counter_label",
    defaultMessage: "The current counter is: {value}" ,
  },
  counter_label: { 
    id: "counter_label",
    defaultMessage: "counter",
  },
  increment: {
    id: "increment",
    defaultMessage: "increment",
  },
  decrement: {
    id: "decrement",
    defaultMessage: "decrement",
  },
  undo: {
    id: "undo",
    defaultMessage: "undo",
  },
  redo: {
    id: "decrement",
    defaultMessage: "redo",
  }
});

type ClassKeys = 'root';

const styles: StyleRules<ClassKeys> = {
  root: {
    backgroundColor: 'red',
  },
};

export interface CounterProps {
  value: number;
  onChange(value: number): void;
  onUndo(): void;
  onRedo(): void;
}

// Main presentation component: styles have to be passed explicitly. 
export class UnstyledCounter 
  extends React.PureComponent<CounterProps & WithStyles<'root'>> 
{
  readonly inc = () => this.props.onChange(this.props.value + 1);
  readonly dec = () => this.props.onChange(this.props.value - 1);

  render() {
    return (
       <Paper elevation={4}>
        <div>
          <CounterDisplay {...this.props} label={ messages.current_counter_label } />
          <NumberInput label={messages.counter_label} change={this.props.onChange} value={this.props.value}/>
        </div>
        <div>
          <LabeledButton label={messages.increment} click={this.inc} {...this.props}/>
          <LabeledButton label={messages.decrement} click={this.dec} {...this.props}/>
        </div>
        <div>
           <LabeledButton label={messages.undo} click={this.props.onUndo} {...this.props}/>
           <LabeledButton label={messages.redo} click={this.props.onRedo} {...this.props}/>
        </div>
      </Paper>
    );
  }
}

// Applies the specified styles 
export const Counter = withStyles(styles)(UnstyledCounter);
