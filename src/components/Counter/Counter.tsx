import * as React from 'react';
import { NumberInput, LabeledButton } from "../ui-shared/";
import { defineMessages } from 'react-intl';
import { CounterDisplay } from './CounterDisplay';
import { Paper } from 'material-ui';

/** Localizable strings from React-intl. */
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

/** A type for wrapping the Counter Varlue */
export interface CounterValueProps {
  value: number;
}

/** The properties passed to the counter component. */
export interface CounterProps extends CounterValueProps {
  onChange: (value: number) => void;
  onUndo: () => void;
  onRedo: () => void;
}

/** Main presentation component of the counter. */
export class Counter extends React.PureComponent<CounterProps> 
{
  readonly incHandler = () => this.props.onChange(this.props.value + 1);
  readonly decHandler = () => this.props.onChange(this.props.value - 1);
  readonly undoHandler = () => this.props.onUndo();
  readonly redoHandler = () => this.props.onRedo();

  render() 
  {
    return (
       <Paper elevation={4}>
        <div>
          <CounterDisplay {...this.props} label={ messages.current_counter_label } />
          <NumberInput label={messages.counter_label} {...this.props}/>
        </div>
        <div>
          <LabeledButton label={messages.increment} onClick={this.incHandler} {...this.props}/>
          <LabeledButton label={messages.decrement} onClick={this.decHandler} {...this.props}/>
        </div>
        <div>
           <LabeledButton label={messages.undo} onClick={this.undoHandler} {...this.props}/>
           <LabeledButton label={messages.redo} onClick={this.redoHandler} {...this.props}/>
        </div>
      </Paper>
    );
  }
}