import { useEffect, useState } from 'react';
import { keySelector, levelSelector } from 'reduxStore';
import { useSelector } from 'react-redux';
import { generateCards } from 'utils';

export function useGameCards() {
  const key = useSelector(keySelector);
  const currentLevel = useSelector(levelSelector);
  const [cards, setCards] = useState(generateCards(currentLevel));

  useEffect(() => {
    setCards(generateCards(currentLevel));
  }, [key]);
  return cards;
}
