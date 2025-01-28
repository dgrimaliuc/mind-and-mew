import { useEffect } from 'react';
import { isFullOpenSelector } from 'reduxStore';
import { useSelector } from 'react-redux';

export function useIsFullOpen(styles, innerRef) {
  const isBoardFullOpen = useSelector(isFullOpenSelector);

  useEffect(() => {
    if (isBoardFullOpen) {
      innerRef.current.classList.add(styles.flipped);
    } else {
      innerRef.current.classList.remove(styles.flipped);
    }
  }, [innerRef, isBoardFullOpen, styles.flipped]);
}
