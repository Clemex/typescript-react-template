import { connect } from 'react-redux';
import { Counter } from './Counter';

/** 
 * The state of the counter. Contains the current value, a history and an index for tracking undo/redo. 
 * Making states classes is useful, because they can be initialized. 
*/
export class CounterState {
    readonly value: number = 0;
    readonly history: number[] = [0]; 
    readonly undoIndex: number = 0;
}

/** Generic type for actions with or without payloads. */
export type Action<T, P = undefined> = { readonly type: T; readonly payload: P; }

/** Counter specific type of an undo action */
export type UndoActionType = Action<'undo'>;

/** Counter specific type of a redo action */
export type RedoActionType = Action<'redo'>;

/** Counter specific type of a replace action */
export type ReplaceActionType = Action<'replace', number>;

/** Creator functions for the different types of actions.*/
export const CounterActionCreators = {
  undo: () => ({ type: 'undo' }),
  redo: () => ({ type: 'redo' }),
  replace: (payload: number) => ({ type: 'replace', payload }),
}

/** One of the different supported actions.  */
export type CounterActionType = UndoActionType | RedoActionType | ReplaceActionType;

/**
 * This is the redux reducer for the counter component. Given an action 
 * it will create a new state from the previous state. 
 */
export function counterReducer(state: CounterState = new CounterState(), action: CounterActionType): CounterState {
  switch (action.type) {
      case 'replace':
          return state.value !== action.payload ? {
              value: action.payload, 
              history: [...state.history.slice(0, state.undoIndex+1), action.payload],
              undoIndex: state.undoIndex+1 
          } : state;
      case  'undo':
         return state.undoIndex > 0 ? {    
              value: state.history[state.undoIndex - 1],
              history: state.history,
              undoIndex: state.undoIndex-1,
          } : state;
      case 'redo':
          return state.undoIndex < state.history.length - 1 ? {
              value: state.history[state.undoIndex+1],
              history: state.history,
              undoIndex: state.undoIndex+1,
          } : state;
      default : 
          return state;
  }
};

/** 
 * Function used to map Redux state to prperties in the counter. 
 * Notice, we do not specify types, instead we let TypeScript infer the correct type. 
 * This is useful for getting the correct type out of the connect HOC function 
*/
const mapStateToProps = (state) => ({ 
  value: state['counter'].value as number 
});
  
/**
 * Mapping callback properties to an action dispatcher. 
 * Notice, we do not specify the return type, instead we let TypeScript infer the types.
 */
const mapDispatchToProps = (dispatch) => ({
  change: (value: number) => dispatch(CounterActionCreators.replace(value)),
  undo: () => dispatch(CounterActionCreators.undo),
  redo: () => dispatch(CounterActionCreators.redo),
});

/** 
 * The 'connect' function take a component and returns a high order component. 
 * No types are needed, it is inferred automatically. 
 */
export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
