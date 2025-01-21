import styles from './styles/index.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__logo}>
          <div className={styles.header__logo_icon}>M</div>
          <div className={styles.header__logo_text}>Mind and Mew</div>
          <div className={styles.header__logo_icon}>M</div>
        </div>
      </div>
    </header>
  );
}
