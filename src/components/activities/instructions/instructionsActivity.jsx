import styles from './styles/index.module.scss';
import { Activity } from '../../activity';
import {
  boardActions,
  correctImageSelector,
  currentActivitySelector,
  currentPlayerSelector,
  levelSelector,
  modalActions,
} from 'reduxStore';
import { useDispatch, useSelector } from 'react-redux';
import { ActionButton } from 'components/actionButton';
import { INSTRUCTIONS_ACTIVITY, PERSONAL_USER_ACTIVITY } from 'utils';

export function InstructionsActivity() {
  const { id, color, name } = useSelector(currentPlayerSelector);
  const correctImage = useSelector(correctImageSelector);
  const currentActivity = useSelector(currentActivitySelector);
  console.log('currentActivity', currentActivity);
  const dispatch = useDispatch();

  const handleStartClick = () => {
    dispatch(boardActions.resetBoard());
    dispatch(boardActions.showCards());
    dispatch(modalActions.hideModal());
    dispatch(modalActions.setCurrentActivity(PERSONAL_USER_ACTIVITY));
  };

  const handleRestartStartClick = () => {
    dispatch(boardActions.resetBoard());
    dispatch(boardActions.showCards());
    dispatch(modalActions.hideModal());
  };

  const currentLevel = useSelector(levelSelector);

  return (
    <Activity>
      <div>
        <h3>Instructions for Player {id}</h3>
        <div className={styles.instructions__description}>
          <span style={{ color: color }}>{name}</span> you should select
          <span className={styles.instructions__level_info} style={{ color: color }}>
            {currentLevel.correct}
          </span>
          cards with image bellow
        </div>
        <div className={styles.instructions__image_container}>
          <img className={styles.instructions__image} src={correctImage} alt='Correct Img' />
        </div>

        {currentActivity === INSTRUCTIONS_ACTIVITY && (
          <ActionButton text='Start' onClick={handleStartClick} />
        )}
        {currentActivity === PERSONAL_USER_ACTIVITY && (
          <ActionButton text='Restart' onClick={handleRestartStartClick} />
        )}
      </div>
    </Activity>
  );
}
