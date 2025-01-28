import { useEffect } from 'react';
import {
  boardActions,
  correctSelector,
  currentPlayerIdSelector,
  gameActions,
  incorrectSelector,
  levelSelector,
  modalActions,
  nextPlayerIdSelector,
} from 'reduxStore';
import { useDispatch, useSelector } from 'react-redux';
import { INSTRUCTIONS_ACTIVITY, RESULTS_ACTIVITY } from 'utils';

export function usePlayerResults() {
  const dispatch = useDispatch();
  const currentLevel = useSelector(levelSelector);
  const currentPlayerId = useSelector(currentPlayerIdSelector);
  const correct = useSelector(correctSelector);
  const incorrect = useSelector(incorrectSelector);
  const nextPlayer = useSelector(nextPlayerIdSelector);

  useEffect(() => {
    let timer = null;
    if (correct === currentLevel.correct) {
      dispatch(boardActions.showCards());
      dispatch(gameActions.setPlayerResult({ id: currentPlayerId, correct, incorrect }));

      if (nextPlayer) {
        dispatch(gameActions.setCurrentPlayerId(nextPlayer));
        dispatch(modalActions.setCurrentActivity(INSTRUCTIONS_ACTIVITY));
        timer = setTimeout(() => {
          dispatch(modalActions.showModal());
        }, 1500);
      } else {
        dispatch(modalActions.setCurrentActivity(RESULTS_ACTIVITY));
        dispatch(modalActions.showModal());
      }
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correct, currentLevel, dispatch]);
}
