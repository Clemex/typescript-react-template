import { connect } from 'react-redux';
import { Counter, CounterProps } from './Counter';
import {undoAction, redoAction, replaceActionCreator} from './CounterAction';

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
    change: (value: number) => dispatch(replaceActionCreator(value)),
    undo: () => dispatch(undoAction),
    redo: () => dispatch(redoAction),
  });

// The 'connect' take a Container and returns a high order component
export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
