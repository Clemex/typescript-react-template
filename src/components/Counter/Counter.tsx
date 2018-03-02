import * as React from 'react';
import { WithStyles, withStyles, Paper } from 'material-ui';
import { NumberInput, LabeledButton } from "../ui-shared/";
import { Theme } from 'material-ui/styles';
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

// Styles 
const styles = {
  root: {
    backgroundColor: 'red',
  },
} as React.CSSProperties;


export type CounterProps = WithStyles<'root'> & {
  value: number;
  change: (value: number) => void;
  undo: () => void;
  redo: () => void;
}

// Main presentation component: without styles
export class UnstyledCounter extends React.PureComponent<CounterProps> {
  render() {
    const inc = () => this.props.change(this.props.value + 1);
    const dec = () => this.props.change(this.props.value - 1);
    const undo = () => this.props.undo();
    const redo = () => this.props.redo();
    return (
       <Paper elevation={4}>
        <div>
          <CounterDisplay {...this.props} label={ messages.current_counter_label } />
          <NumberInput label={messages.counter_label} {...this.props}/>
        </div>
        <div>
          <LabeledButton label={messages.increment} click={inc} {...this.props}/>
          <LabeledButton label={messages.decrement} click={dec} {...this.props}/>
        </div>
        <div>
           <LabeledButton label={messages.undo} click={undo} {...this.props}/>
           <LabeledButton label={messages.redo} click={redo} {...this.props}/>
        </div>
      </Paper>
    );
  }
}

// Applies the specified styles 
export const Counter = withStyles(styles)(UnstyledCounter);