export const keySelector = state => boardSelector(state).key;
export const boardSelector = state => state.board;
export const isFullOpenSelector = state => boardSelector(state).fullOpen;
export const correctSelector = state => boardSelector(state).correct;
export const incorrectSelector = state => boardSelector(state).incorrect;
