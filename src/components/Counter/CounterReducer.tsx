import { CounterState }  from "./CounterContainer";
import { CounterAction, Action }  from "./CounterAction";

/**
 * This is the redux reducer for the counter component
 * @param state The state associated with the component
 * @param action CounterAction.ActionType ensure that .type exist on the action
 */
export const counterReducer = (state: CounterState = new CounterState(), action: CounterAction.ActionType): CounterState => {
    switch (action.type) {
        case CounterAction.replace.type:
            return state.counter !== action.payload ? {
                counter: action.payload, 
                history: [...state.history.slice(0, state.undoIndex+1), action.payload],
                undoIndex: state.undoIndex+1 
            } : state;
        case CounterAction.undo.type:
           return state.undoIndex > 0 ? {    
                counter: state.history[state.undoIndex - 1],
                history: state.history,
                undoIndex: state.undoIndex-1,
            } : state;
        case CounterAction.redo.type:
            return state.undoIndex < state.history.length - 1 ? {
                counter: state.history[state.undoIndex+1],
                history: state.history,
                undoIndex: state.undoIndex+1,
            } : state;
        default : 
            return state;
    }
};