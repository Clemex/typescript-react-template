import { connect } from 'react-redux';
import { Counter, CounterProps } from './Counter';
import { CounterAction } from './CounterAction';

/** 
 * The state of the counter stored in the Redux store. 
 * Making this a class allows us to have default values. 
 */
export class CounterState {
    readonly value: number = 0;
    readonly history: number[] = [0]; 
    readonly undoIndex: number = 0;
}

/** A function used by React-Redux for mapping the state to the properties used by the counter. */
export function mapStateToProps(state: any): Partial<CounterProps> {
  return { value: state.counter.value as number };
}
  
/** A function used by React-Redux for mapping of dispatch to properties */
export function mapDispatchToProps(dispatch: any): Partial<CounterProps> {
  return {
    onChange: (value: number) => dispatch(CounterAction.createReplaceAction(value)),
    onUndo: () => dispatch(CounterAction.undo),
    onRedo: () => dispatch(CounterAction.redo),
  };
}

/** 
 * The 'connect' take the two mapping functions, and returns a function that will create a container 
 * component (one that gets and sets state in the Redux store) from a presentation component. 
 * */ 
export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
