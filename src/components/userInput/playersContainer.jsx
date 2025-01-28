import { useSelector } from 'react-redux';
import { UserInputField } from '.';

import styles from './style/index.module.scss';
import { playersNumberSelector } from 'reduxStore';
import { players } from 'utils';

export function PlayersContainer() {
  const playersNumber = useSelector(playersNumberSelector);
  return (
    <div className={styles.user__container}>
      {players.slice(0, playersNumber).map(({ color, id }) => (
        <UserInputField key={id} id={id} color={color} />
      ))}
    </div>
  );
}
