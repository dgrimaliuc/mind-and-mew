export const gameSelector = state => state.game;
export const levelSelector = state => gameSelector(state).level;
export const playerNameSelector = (state, id) => gameSelector(state, id).players[id]?.name || '';
export const playerErrorSelector = (state, id) => gameSelector(state, id).errors[id];

export const playersNumberSelector = state => gameSelector(state).playersNumber;
export const playersSelector = state => gameSelector(state).players;
export const errorsSelector = state => gameSelector(state).errors;
