export const boardSelector = state => state.board;
export const fullOpenSelector = state => boardSelector(state).fullOpen;
