import { Modal } from '@mui/material';
import styles from './styles/index.module.scss';
import { useSelector } from 'react-redux';
import { currentActivitySelector, isModalShown } from 'reduxStore';

import { ActivityManager } from 'components';

export function BoardModal() {
  const modalOpened = useSelector(isModalShown);
  const currentActivity = useSelector(currentActivitySelector);

  return (
    <Modal open={modalOpened} className={styles.board_modal__wrapper}>
      <div className={styles.board_modal__content}>
        <ActivityManager activityId={currentActivity} />
      </div>
    </Modal>
  );
}
