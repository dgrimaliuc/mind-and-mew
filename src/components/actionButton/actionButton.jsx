import { motion } from 'framer-motion';
import styles from './styles/index.module.scss';
import { Button } from '@mui/material';

export function ActionButton({ text, isDisabled = false, onClick }) {
  return (
    <motion.div
      className={styles.action_button__container}
      whileHover={!isDisabled ? { scale: 1.2 } : null}
      transition={{ type: 'spring', stiffness: 300, duration: 100 }}
    >
      <Button
        className={styles.action_button}
        variant='contained'
        disabled={isDisabled}
        onClick={onClick}
      >
        {text}
      </Button>
    </motion.div>
  );
}
