// Import react and redux
import * as React from 'react';
import { connect } from 'react-redux';
import { WithStyles, withStyles, Paper } from 'material-ui';
import { Text, BaseStyleProps, NumberInput, NumberInputProps, LabeledButton } from '../shared/shared';

// TODO: add internationalization support 

// NOTE: without type cast things fail: https://github.com/Microsoft/TypeScript/issues/6352

// TODO: move these out of the component. 
export const addAmount = (value: number) => ({ type: 'ADD', payload: value });
export const replaceAmount = (value: number) => ({ type: 'REPLACE', payload: value });

const styles = {
  root: {
    backgroundColor: 'red',
  },
};

export type CounterValueProps = {
  value: number;
}

export type CounterProps = BaseStyleProps & CounterValueProps & NumberInputProps & {
}

export class CounterDisplay extends React.PureComponent<CounterValueProps> {
  render(): React.ReactNode {
     return (
        <Text type="display1">
          The current counter is: {this.props.value}
        </Text>
    );
  }
}

export class Counter extends React.PureComponent<CounterProps> {
  render() {
    const inc = () => this.props.change(this.props.value + 1);
    const dec = () => this.props.change(this.props.value - 1);
    return (
       <Paper elevation={4}>
        <div>
          <CounterDisplay {...this.props}/>
          <NumberInput {...this.props}/>
          <LabeledButton label={'Increment'} click={inc} {...this.props}/>
          <LabeledButton label={'Decrement'} click={dec} {...this.props}/>
        </div>
      </Paper>
    );
  }
}

// Map the global store to propTypes of 'Counter' container
const mapStateToProps = (state: any) => ({
  value: state.counter.counter,
});

// Also map all the dispatches, again to propTypes of 'Counter'
// TODO: bind to actionCreators 
// https://github.com/piotrwitek/react-redux-typescript-guide#redux-connected-components
const mapDispatchToProps = (dispatch: any) => ({
  change: (value: number) => dispatch(replaceAmount(value))
});

// Applies the specified styles 
export const StyledCounter = withStyles(styles)(Counter);

// The 'connect' take a Container and returns a high order component 
export default connect<Partial<CounterProps>>(mapStateToProps, mapDispatchToProps)(StyledCounter);
