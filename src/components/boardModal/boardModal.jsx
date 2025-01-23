import styles from './styles/index.module.scss';

export function BoardModal() {
  return (
    <div className={styles.board_modal__wrapper}>
      <h3 className={styles.board_modal__title}>Are you ready?</h3>
      <button className={styles.board_modal__ready_button}>Ready</button>
    </div>
  );
}
