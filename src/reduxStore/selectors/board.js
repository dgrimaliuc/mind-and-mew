export const boardSelector = state => state.board;
export const isFullOpen = state => boardSelector(state).fullOpen;
export const correctSelector = state => boardSelector(state).correct;
export const incorrectSelector = state => boardSelector(state).incorrect;
export const isModalShown = state => boardSelector(state).isModalShown;
