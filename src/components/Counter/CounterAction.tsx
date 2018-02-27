// Common base action type
export type SimpleAction<T> = { readonly type: T; }
export type ActionWithPayload<T, P> = { readonly type: T; readonly payload: P; }

// Counter specific action types
export type ReplaceAction = ActionWithPayload<'REPLACE', number>;
export function replaceActionCreator(value: number): ReplaceAction {
    return { type: 'REPLACE', payload: value };
}

export type UndoAction = SimpleAction<'UNDO'>;
export const undoAction: UndoAction = { type: 'UNDO' }

export type RedoAction = SimpleAction<'REDO'>;
export const redoAction: RedoAction = { type: 'REDO' }

// The union of all posible action types 
export type CounterAction = ReplaceAction | UndoAction | RedoAction;
