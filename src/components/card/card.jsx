import { combineClasses } from 'utils';
import styles from './styles/index.module.scss';

export function Card() {
  return (
    <div className={combineClasses(styles.card, styles.flipped)}>
      <div className={styles.card__inner}>
        <div className={styles.card__front}>Front</div>
        <div className={styles.card__back}>Back</div>
      </div>
    </div>
  );
}
