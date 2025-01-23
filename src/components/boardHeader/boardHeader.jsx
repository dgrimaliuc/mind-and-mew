import styles from './styles/index.module.scss';
import SettingsIcon from '@mui/icons-material/Settings';
import { correctSelector, incorrectSelector } from 'reduxStore';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export function BoardHeader() {
  const correct = useSelector(correctSelector);
  const incorrect = useSelector(incorrectSelector);
  return (
    <div className={styles.header}>
      <h2 className={styles.header__title}>Test your mind</h2>
      <div className={styles.header__counter}>
        <span className={correct > 0 ? styles.header__counter_icon_green : ''}>{correct}</span>
        <span>/</span>
        <motion.span
          key={incorrect}
          initial={{ x: 0 }}
          animate={incorrect > 0 ? { y: [-5, 5, -5, 5, 0] } : {}}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={incorrect > 0 ? styles.header__counter_icon_red : ''}
        >
          {incorrect}
        </motion.span>
      </div>
      <SettingsIcon fontSize='large' className={styles.header__settings_icon} />
    </div>
  );
}
