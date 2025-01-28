import styles from './styles/index.module.scss';

export function Activity({ children }) {
  return <div className={styles.activity__container}>{children}</div>;
}
