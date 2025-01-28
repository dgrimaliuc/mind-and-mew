import styles from './styles/index.module.scss';
import { DropdownOption } from 'components/dropdown';
import { Activity } from '../../activity';
import { PlayersContainer } from 'components/userInput';
import { useDispatch, useSelector } from 'react-redux';
import { errorsSelector, gameActions, modalActions, playersSelector } from 'reduxStore';
import { useEffect, useState } from 'react';
import { INSTRUCTIONS_ACTIVITY, levels } from 'utils';
import { ActionButton } from 'components/actionButton';

export function SettingsActivity() {
  const dispatch = useDispatch();
  const players = useSelector(playersSelector);
  const errors = useSelector(errorsSelector);
  const [isDisabled, setDisabled] = useState(true);

  const handleLevelChange = e => {
    const level = levels[e.target.value.toLowerCase()];
    dispatch(gameActions.setLevel(level));
  };

  const handlePlayersNumberChange = e => {
    dispatch(gameActions.setPlayersNumber(e.target.value));
    dispatch(gameActions.resetPlayers());
  };

  useEffect(() => {
    const isAnyErrorDisplayed = Object.values(errors).filter(error => error).length > 0;
    const isAnyPlayerNameEmpty =
      Object.values(players).length === 0 ||
      Object.values(players).filter(player => !player.name).length > 0;

    setDisabled(isAnyErrorDisplayed || isAnyPlayerNameEmpty);
  }, [errors, players]);

  return (
    <Activity>
      <div className={styles.settings__container}>
        <h3 className={styles.settings__title}>Are you ready?</h3>
        <DropdownOption
          label='Level'
          className={styles.settings__dropdown}
          onSelectOption={handleLevelChange}
          options={['Easy', 'Medium', 'Hard']}
        />
        <DropdownOption
          className={styles.settings__dropdown}
          label='Players'
          onSelectOption={handlePlayersNumberChange}
          options={[1, 2, 3]}
        />

        <PlayersContainer />

        <ActionButton
          text='Ready'
          isDisabled={isDisabled}
          onClick={dispatch.bind(null, modalActions.setCurrentActivity(INSTRUCTIONS_ACTIVITY))}
        />
      </div>
    </Activity>
  );
}
