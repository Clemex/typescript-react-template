import { CounterState }  from "./CounterContainer";
import { CounterAction }  from "./CounterAction";

/**
 * This function is the Redux reducer for the counter component. It transforms 
 * the state according to the action type and the payload, if present. 
 */
export const counterReducer = (state: CounterState = new CounterState(), action: CounterAction.ActionType): CounterState => {
    switch (action.type) {
        case CounterAction.replace.type:
            return state.value !== action.payload ? {
                value: action.payload, 
                history: [...state.history.slice(0, state.undoIndex+1), action.payload],
                undoIndex: state.undoIndex+1 
            } : state;
        case CounterAction.undo.type:
           return state.undoIndex > 0 ? {    
                value: state.history[state.undoIndex - 1],
                history: state.history,
                undoIndex: state.undoIndex-1,
            } : state;
        case CounterAction.redo.type:
            return state.undoIndex < state.history.length - 1 ? {
                value: state.history[state.undoIndex+1],
                history: state.history,
                undoIndex: state.undoIndex+1,
            } : state;
        default : 
            return state;
    }
};