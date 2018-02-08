import { connect } from 'react-redux';
import { CounterProps, Counter } from './Counter';

// The state of the counter 
export class CounterState {
    readonly counter: number = 0;
    readonly history: number[] = [0]; 
    readonly undoIndex: number = 0;
}

// Types of actions triggered by the counter  
export type CounterAction = {
    readonly type: string, 
    readonly payload: number
}

// Actions and action creators 
export const replaceActionCreator = (value: number): CounterAction => ({ type: 'REPLACE', payload: value });
export const undoAction: CounterAction = {type: 'UNDO', payload: 0};
export const redoAction: CounterAction = {type: 'REDO', payload: 0};

// Reducers 
export const counterReducer = (state:CounterState = new CounterState(), action: CounterAction): CounterState => {
    switch (action.type) {
        case 'REPLACE':
            return state.counter !== action.payload ? {
                counter: action.payload, 
                history: [...state.history.slice(0, state.undoIndex+1), action.payload],
                undoIndex: state.undoIndex+1 
            } : state;
        case 'UNDO':
           return state.undoIndex > 0 ? {    
                counter: state.history[state.undoIndex - 1],
                history: state.history,
                undoIndex: state.undoIndex-1,
            } : state;
        case 'REDO':
            return state.undoIndex < state.history.length - 1 ? {
                counter: state.history[state.undoIndex+1],
                history: state.history,
                undoIndex: state.undoIndex+1,
            } : state;
        default : 
            return state;
    }
};

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
