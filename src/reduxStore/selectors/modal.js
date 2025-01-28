export const modalSelector = state => state.modal;
export const isModalShown = state => modalSelector(state).isModalShown;
export const currentActivitySelector = state => modalSelector(state).currentActivity;
