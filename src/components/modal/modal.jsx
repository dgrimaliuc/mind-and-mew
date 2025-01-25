import { Modal, Button } from '@mui/material';
import styles from './styles/index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  boardActions,
  errorsSelector,
  gameActions,
  isModalShown,
  playersSelector,
} from 'reduxStore';
import { motion } from 'framer-motion';
import { DropdownOption, PlayersContainer, UserInputContainer } from 'components';
import { useEffect, useState } from 'react';

export function BoardModal() {
  const modalOpened = useSelector(isModalShown);

  const players = useSelector(playersSelector);
  // const playersNumber = useSelector(playersNumberSelector);
  const errors = useSelector(errorsSelector);

  // const modalOpened = false;
  const dispatch = useDispatch();

  const handleLevelChange = e => {
    dispatch(gameActions.setLevel(e.target.value));
  };

  const handlePlayersNumberChange = e => {
    dispatch(gameActions.setPlayersNumber(e.target.value));
    dispatch(gameActions.resetPlayers());
  };

  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    const isAnyErrorDisplayed = Object.values(errors).filter(error => error).length > 0;
    const isAnyPlayerEmpty =
      Object.values(players).length === 0 ||
      Object.values(players).filter(player => !player.name).length > 0;

    setDisabled(isAnyErrorDisplayed || isAnyPlayerEmpty);
  }, [errors, players]);

  return (
    <Modal open={modalOpened} className={styles.board_modal__wrapper}>
      <div className={styles.board_modal__content}>
        <h3 className={styles.board_modal__title}>Are you ready?</h3>
        <DropdownOption
          label='Level'
          className={styles.board_modal__dropdown}
          onSelectOption={handleLevelChange}
          options={['Easy', 'Medium', 'Hard']}
        />
        <DropdownOption
          className={styles.board_modal__dropdown}
          label='Players'
          onSelectOption={handlePlayersNumberChange}
          options={[1, 2, 3]}
        />

        <PlayersContainer />

        <motion.div
          className={styles.board_modal__action_button_container}
          whileHover={!isDisabled ? { scale: 1.2 } : null}
          transition={{ type: 'spring', stiffness: 300, duration: 100 }}
        >
          <Button
            className={styles.board_modal__action_button}
            variant='contained'
            disabled={isDisabled}
            onClick={dispatch.bind(null, boardActions.hideModal())}
          >
            Ready
          </Button>
        </motion.div>
      </div>
    </Modal>
  );
}
