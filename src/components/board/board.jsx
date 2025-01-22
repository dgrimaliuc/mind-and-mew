import styles from './styles/index.module.scss';
import { Card } from '../card';

export function Board() {
  return (
    <div className={styles.board}>
      <div className={styles.board__wrapper}>
        <h2 className={styles.board__title}>Test your mind</h2>
        <div className={styles.board__cards_container}>
          {Array.from({ length: 20 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
