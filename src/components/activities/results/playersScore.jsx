import styles from './styles/index.module.scss';
import { useSelector } from 'react-redux';
import { playersSelector } from 'reduxStore';

export function PlayersScore() {
  const players = useSelector(playersSelector);
  const playersNumber = Object.keys(players).length;
  const minErrorCount = Math.min(...Object.values(players).map(player => player.results.incorrect));
  const winners = Object.values(players).filter(
    player => player.results.incorrect === minErrorCount,
  );
  const manyWinners = winners.length > 1;
  const displayAllWinners = playersNumber > 1 && playersNumber !== winners.length;

  return (
    <div className={styles.results__players_container}>
      {Object.values(players).map(player => (
        <div key={player.id} className={styles.results__player_result}>
          Player {player.id} - <span>{player.name}</span> :{' '}
          <span className={styles.results__correct}>{player.results?.correct} </span> /{' '}
          <span className={styles.results__incorrect}>{player.results?.incorrect}</span>
        </div>
      ))}

      <div className={styles.results__win_section}>
        {playersNumber === 1 && 'You are the winner!'}
        {playersNumber > 1 && playersNumber === winners.length && 'Friendship wins!'}
        {displayAllWinners && `The winner${manyWinners ? 's' : ''} ${manyWinners ? 'are' : 'is'} `}
        {displayAllWinners && <div>{winners.map(p => p.name).join(', ')}</div>}
      </div>
    </div>
  );
}
