import styles from './styles/index.module.scss';
import { Activity } from '../../activity';

import { ActionButton } from 'components/actionButton';
import { useDispatch } from 'react-redux';
import { boardActions, gameActions, modalActions } from 'reduxStore';
import { PlayersScore } from './playersScore';

export function ResultsActivity() {
  const dispatch = useDispatch();

  const handleRestartStartClick = () => {
    dispatch(boardActions.resetBoard());
    dispatch(gameActions.resetGame());
    dispatch(modalActions.resetModal());
  };

  return (
    <Activity>
      <div className={styles.results__container}>
        <h3 className={styles.results__title}>Game Score</h3>
        <PlayersScore core />
        <ActionButton text='Restart' onClick={handleRestartStartClick} />
      </div>
    </Activity>
  );
}
