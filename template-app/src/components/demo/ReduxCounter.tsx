import * as React from 'react';
import { connect } from 'react-redux';
import { WithStyles, withStyles, Paper } from 'material-ui';
import { Text, BaseStyleProps, NumberInput, NumberInputProps, LabeledButton } from '../shared/shared';
import { Theme } from 'material-ui/styles';

// TODO: add internationalization support 
// https://material-ui-next.com/guides/typescript/
// NOTE: without type cast things fail: https://github.com/Microsoft/TypeScript/issues/6352

// TODO: move these out of the component. 
export const addAmount = (value: number) => ({ type: 'ADD', payload: value });
export const replaceAmount = (value: number) => ({ type: 'REPLACE', payload: value });

const styles = (theme: Theme) => ({
  root: {
    backgroundColor: 'red',
  },
  theme1: {
    backgroundColor: 'blue',
  }
} as React.CSSProperties);

export type CounterProps = WithStyles<'root'|'theme1'> & {
  value: number;
  change: (value: number) => void;
}

export class CounterDisplay extends React.PureComponent<CounterProps> {
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
          <NumberInput label="counter" {...this.props}/>
          <LabeledButton label={'Increment'} click={inc} {...this.props}/>
          <LabeledButton label={'Decrement'} click={dec} {...this.props}/>
        </div>
      </Paper>
    );
  }
}

// Map the global store to propTypes of 'Counter' container
const mapStateToProps = (state: any): Partial<CounterProps> => ({
  value: state.counter.counter as number,
});

// Also map all the dispatches, again to propTypes of 'Counter'
// TODO: bind to actionCreators 
// https://github.com/piotrwitek/react-redux-typescript-guide#redux-connected-components
const mapDispatchToProps = (dispatch: any): Partial<CounterProps> => ({
  change: (value: number) => dispatch(replaceAmount(value))
});

// Applies the specified styles 
export const StyledCounter = withStyles(styles)(Counter);

// The 'connect' take a Container and returns a high order component 
export default connect(mapStateToProps, mapDispatchToProps)(StyledCounter);
