export const gameSelector = state => state.game;
export const levelSelector = state => gameSelector(state).level;
export const playerNameSelector = (state, id) => gameSelector(state, id).players[id]?.name || '';
export const playerErrorSelector = (state, id) => gameSelector(state, id).errors[id];
export const playersNumberSelector = state => gameSelector(state).playersNumber;
export const playersSelector = state => gameSelector(state).players;

export const imagesSelector = state => gameSelector(state).images;
export const correctImageSelector = state => imagesSelector(state).correct;

export const errorsSelector = state => gameSelector(state).errors;
export const currentPlayerIdSelector = state => gameSelector(state).currentPlayerId;

export const nextPlayerIdSelector = state => {
  let current = gameSelector(state).currentPlayerId;
  let keys = Object.keys(playersSelector(state));
  return keys[current];
};
export const currentPlayerSelector = state =>
  playersSelector(state)[currentPlayerIdSelector(state)];
