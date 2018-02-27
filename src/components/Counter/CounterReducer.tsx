import { CounterState }  from "./CounterContainer";
import { CounterAction }  from "./CounterAction";

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