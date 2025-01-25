import { useSelector } from 'react-redux';
import { UserInputField } from '.';

import styles from './style/index.module.scss';
import { playersNumberSelector } from 'reduxStore';

const players = [
  { id: 1, color: 'blue' },
  { id: 2, color: 'green' },
  { id: 3, color: 'red' },
];

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
