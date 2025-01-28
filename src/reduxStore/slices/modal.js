import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';

const initialState = { currentActivity: 'settings', isModalShown: true };

const modalSlice = createSlice({
  name: 'modal',
  initialState: cloneDeep(initialState),
  reducers: {
    resetModal(state) {
      Object.assign(state, cloneDeep(initialState));
    },
    showModal(state) {
      state.isModalShown = true;
    },
    hideModal(state) {
      state.isModalShown = false;
    },
    setCurrentActivity(state, action) {
      state.currentActivity = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
