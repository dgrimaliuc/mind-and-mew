import styles from './styles/index.module.scss';
import SettingsIcon from '@mui/icons-material/Settings';
import { correctSelector, incorrectSelector } from 'reduxStore';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export function BoardHeader() {
  const correct = useSelector(correctSelector);
  const incorrect = useSelector(incorrectSelector);
  const header = useRef(null);
  return (
    <div className={styles.header} ref={header}>
      <motion.h2 className={styles.header__title} initial={{ x: 100 }} animate={{ x: 0 }}>
        Test your mind
      </motion.h2>
      <motion.div
        className={styles.header__counter}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
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
      </motion.div>
      <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
        <SettingsIcon fontSize='large' className={styles.header__settings_icon} />
      </motion.div>
    </div>
  );
}
