import { configureStore } from '@reduxjs/toolkit';
import { boardReducer } from './slices';

const store = configureStore({
  reducer: {
    board: boardReducer,
  },
});

store.subscribe(() => console.log(store.getState()));

export default store;

export * from './slices';
export * from './selectors';
