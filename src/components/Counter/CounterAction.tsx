export type Action<T> = { readonly type: T; }
export type ActionWithPayload<T, P> = { readonly type: T; readonly payload: P; }

/**
 * This Counter Action module is used to help the interaction with the counter actions.
 * It will make the disatch easy to do and will prevent the use of a 
 * string (the reducer action key) in multiple places of the code.
 * 
 * Example usage: dispatch(CounterAction.undo)
 */
export module CounterAction 
{    
  export type UndoAction = Action<'COUNTER.UNDO'>;
  export type RedoAction =  Action<'COUNTER.REDO'>;
  export type ReplaceAction = ActionWithPayload<'COUNTER.REPLACE', number>;

  export const redo = { type: 'COUNTER.REDO' } as RedoAction;
  export const undo = { type: 'COUNTER.UNDO' } as UndoAction;
  export const replace = { type: 'COUNTER.REPLACE' } as ReplaceAction;

  export type ActionType = UndoAction | RedoAction | ReplaceAction;

  export function createReplaceAction(value: number): ReplaceAction {
    return { type: 'COUNTER.REPLACE', payload: value } as ReplaceAction;
  }
}