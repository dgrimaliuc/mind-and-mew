import styles from './styles/index.module.scss';
import { BoardModal, Card } from 'components';
import { BoardHeader } from 'components';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { boardActions } from 'reduxStore';
import { generateCards } from 'utils';

const easyLevel = { correct: 8, incorrect: 9, placeholder: 3 };

const images = {
  correct: 'https://cdn2.thecatapi.com/images/ATYs2BetM.jpg',
  incorrect: 'https://cdn2.thecatapi.com/images/xnzzM6MBI.jpg',
};

export function Board() {
  const cards = useMemo(() => generateCards(easyLevel), []);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(boardActions.hideCards());
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className={styles.board}>
      {/* <Backdrop style={{ zIndex: 2 }} open={true} /> */}
      <div className={styles.board__wrapper}>
        <BoardModal />
        <BoardHeader />
        <div className={styles.board__cards_container}>
          {cards.map((type, index) => (
            <Card key={index} type={type} image={images[type]} />
          ))}
        </div>
      </div>
    </div>
  );
}
