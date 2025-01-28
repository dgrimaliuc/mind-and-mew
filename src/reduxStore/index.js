import { configureStore } from '@reduxjs/toolkit';
import { boardReducer, gameReducer, modalReducer } from './slices';

const store = configureStore({
  reducer: {
    board: boardReducer,
    game: gameReducer,
    modal: modalReducer,
  },
});

store.subscribe(() => console.log(store.getState()));

export default store;

export * from './slices';
export * from './selectors';
