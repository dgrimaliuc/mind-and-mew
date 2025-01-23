import { combineClasses } from 'utils';
import styles from './styles/index.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { fullOpenSelector } from 'reduxStore';
import { useHoverCursor } from 'hooks';

export function Card({ correct = true, image }) {
  const innerRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  const isBoardFullOpen = useSelector(fullOpenSelector);
  const { position, isHovering, handleMouseMove, handleMouseLeave } = useHoverCursor();

  const handleFlip = useCallback(() => {
    if (flipped) return;
    innerRef.current.classList.toggle(styles.flipped);
    handleMouseLeave();
    setFlipped(state => !state);
  }, [flipped, handleMouseLeave]);

  useEffect(() => {
    if (isBoardFullOpen) {
      innerRef.current.classList.add(styles.flipped);
    } else {
      innerRef.current.classList.remove(styles.flipped);
    }
  }, [isBoardFullOpen]);

  return (
    <div
      className={combineClasses(
        styles.card__wrapper,
        correct ? styles.correct_card : styles.incorrect_card,
      )}
    >
      <span
        className={styles.paw_icon}
        style={{
          left: position.x,
          top: position.y,
          display: isHovering ? 'block' : 'none',
        }}
      >
        o
      </span>
      <div ref={innerRef} onClick={handleFlip} className={styles.card__inner}>
        <div className={styles.card__front} style={{ backgroundImage: `url(${image})` }} />
        <div
          className={styles.card__back}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
}
