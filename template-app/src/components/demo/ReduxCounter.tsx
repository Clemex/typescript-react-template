// Import react and redux
import * as React from 'react';
import { connect } from 'react-redux';

// TODO: add internationalization support 
// TODO: add styles support 

// TODO: move these out of the component. 
export const addAmount = (value: number) => ({ type: 'ADD', payload: value });
export const replaceAmount = (value: number) => ({ type: 'REPLACE', payload: value });

export type ButtonProperties = {
  label: string;
  click: () => void;
};

export type CounterValueProps = {
  value: number;
}

export type CounterInputProps = CounterValueProps & {
  change: (value: number) => void;
}

export type CounterProps = CounterValueProps & CounterInputProps & {
}

export class CounterButton extends React.PureComponent<ButtonProperties> {
  render(): React.ReactNode {
    return (
      <div className="counterButton">
        <button onClick={e => this.props.click()}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

export class CounterDisplay extends React.PureComponent<CounterValueProps> {
  render(): React.ReactNode {
     return (
      <div className="counterDisplay">
        <h2>The current counter is</h2>
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}

export class CounterInput extends React.PureComponent<CounterInputProps> {
  render(): React.ReactNode {
    return (
      <div className="counterInput"> 
        <input type="number" autoFocus value={this.props.value} onChange={e => this.props.change(+e.target.value)}/>
      </div>
    );
  }
}

export class Counter extends React.PureComponent<CounterProps> {
  render() {
    const inc = () => this.props.change(this.props.value + 1);
    const dec = () => this.props.change(this.props.value - 1);
    return (
       <div>
        <h3>Counter Manager</h3>
        <CounterDisplay value={this.props.value}/>
        <CounterInput value={this.props.value} change={this.props.change} />
        <CounterButton label={'Increment'} click={inc} />
        <CounterButton label={'Decrement'} click={dec} />
      </div>
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

// The 'connect' take a Container and returns a high order component 
export default connect<Partial<CounterProps>>(mapStateToProps, mapDispatchToProps)(Counter);