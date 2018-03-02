import { connect } from 'react-redux';
import { Counter, CounterProps } from './Counter';
import { CounterAction } from './CounterAction';

// The state of the counter 
export class CounterState {
    readonly counter: number = 0;
    readonly history: number[] = [0]; 
    readonly undoIndex: number = 0;
}

// Mapping of the state to the counter props 
const mapStateToProps = (state: any): Partial<CounterProps> => ({
    value: state.counter.counter as number,
  });
  
// Mapping of dispatch to properties 
const mapDispatchToProps = (dispatch: any): Partial<CounterProps> => ({
  change: (value: number) => dispatch(CounterAction.createReplaceAction(value)),
  undo: () => dispatch(CounterAction.undo),
  redo: () => dispatch(CounterAction.redo),
  });

// The 'connect' take a Container and returns a high order component
export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
