import { combineClasses } from 'utils';
import styles from './styles/index.module.scss';
import { useCallback, useRef } from 'react';
import { useHoverCursor } from 'hooks';
import { useIsFullOpen } from 'hooks';
import { useDispatch } from 'react-redux';
import { boardActions } from 'reduxStore';

export function Card({ type, image }) {
  const innerRef = useRef(null);
  const { position, isHovering, handleMouseMove, handleMouseLeave } = useHoverCursor();
  const dispatch = useDispatch();

  const placeholder = type === 'placeholder';
  const correct = type === 'correct';

  useIsFullOpen(styles, innerRef);

  const handleFlip = useCallback(() => {
    if (correct) {
      dispatch(boardActions.incrementCorrect());
    } else {
      dispatch(boardActions.incrementIncorrect());
    }

    innerRef.current.classList.toggle(styles.flipped);
    handleMouseLeave();
  }, [correct, dispatch, handleMouseLeave]);

  return (
    <div className={placeholder ? styles.card__placeholder : styles.card__wrapper}>
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
