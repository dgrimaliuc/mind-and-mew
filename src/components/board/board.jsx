import styles from './styles/index.module.scss';
import { BoardModal, Card } from 'components';
import { Header } from './boardHeader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { boardActions, imagesSelector, isFullOpenSelector } from 'reduxStore';
import { useGameCards, usePlayerResults } from 'hooks';

export function Board() {
  const cards = useGameCards();
  const isBoardFullOpen = useSelector(isFullOpenSelector);
  const dispatch = useDispatch();
  usePlayerResults();

  const images = useSelector(imagesSelector);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isBoardFullOpen) {
        dispatch(boardActions.hideCards());
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [isBoardFullOpen, dispatch]);

  return (
    <div className={styles.board}>
      <div className={styles.board__wrapper}>
        <BoardModal />
        <Header />
        <div className={styles.board__cards_container}>
          {cards.map((type, index) => (
            <Card key={index} type={type} image={images[type]} />
          ))}
        </div>
      </div>
    </div>
  );
}
