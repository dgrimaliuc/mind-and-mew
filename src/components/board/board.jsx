import styles from './styles/index.module.scss';
import { Card } from 'components';
import { BoardHeader } from 'components';
import { useMemo } from 'react';
import { generateCards } from 'utils';

const level = { correct: 10, incorrect: 10 };

const images = {
  true: 'https://cdn2.thecatapi.com/images/ATYs2BetM.jpg',
  false: 'https://cdn2.thecatapi.com/images/xnzzM6MBI.jpg',
};

export function Board() {
  const cards = useMemo(() => generateCards(level), []);

  return (
    <div className={styles.board}>
      <div className={styles.board__wrapper}>
        <BoardHeader />
        <div className={styles.board__cards_container}>
          {cards.map((e, index) => (
            <Card key={index} correct={e} image={images[e]} />
          ))}
        </div>
      </div>
    </div>
  );
}
