import { configureStore } from '@reduxjs/toolkit';
import { boardReducer, gameReducer } from './slices';

const store = configureStore({
  reducer: {
    board: boardReducer,
    game: gameReducer,
  },
});

store.subscribe(() => console.log(store.getState()));

export default store;

export * from './slices';
export * from './selectors';
