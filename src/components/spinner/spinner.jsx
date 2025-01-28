import { Box, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';

export function Spinner({ className }) {
  return (
    <div className={className}>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='1rem'
        bgcolor='background.default'
      >
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <CircularProgress size={60} thickness={5} />
        </motion.div>
      </Box>
    </div>
  );
}
