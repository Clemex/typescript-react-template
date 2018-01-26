// Import react and redux
import * as React from 'react';
import { connect } from 'react-redux';

export const addAmount = (value: number) => ({ type: 'ADD', payload: value });
export const replaceAmount = (value: number) => ({ type: 'REPLACE', payload: value });

const CounterButton = (props:any) => (
  <div className="counterButton">
    <button onClick={props.click}>
      {props.text}
    </button>
  </div>
);

const CounterDisplay = (props:any) => (
    <div className="counterDisplay">
      <h2>The current counter is</h2>
      <h1>{props.result}</h1>
    </div>
  );

// There is a bug: the value does not update correctly.
// https://reactjs.org/docs/forms.html
const CounterInput = (props:any) => (
    <div className="counterInput"> 
        <input type="number" autoFocus value={props.value} onChange={e => props.change(+e.target.value)}/>
    </div>
    );

export type CounterProps = {
  counter: number;
  onInputChange: (e:Event) => void;
  onAddCounter: (e:Event) => void;
  onSubtractCounter: (e:Event) => void;
}

export class Counter extends React.PureComponent<CounterProps> {
  render() {
    return (
       <div>
        <small>-- Counter Container --</small>
        <h3>Counter Manager</h3>
        <CounterDisplay result={this.props.counter}/>
        <CounterInput change={this.props.onInputChange} />
        <CounterButton text={'Add'} click={this.props.onAddCounter} />
        <CounterButton text={'Subtract'} click={this.props.onSubtractCounter} />
      </div>
    );
  }
}

// Map the global store to propTypes of 'Counter' container
const mapStateToProps = (state: any) => ({
  counter: state.counter,
});

// Also map all the dispatches, again to propTypes of 'Counter'
const mapDispatchToProps = (dispatch:any) => ({
  onAddCounter: (e:any) => dispatch(addAmount(+1)),
  onSubtractCounter: (e:any) => dispatch(addAmount(-1)),
  onInputChange: (value: any) => dispatch(replaceAmount(value))
});

// The 'connect' take a Container and returns a high order component 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);