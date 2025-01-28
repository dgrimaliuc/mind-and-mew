import '@testing-library/jest-dom';

it('renders the image with the correct src and alt attributes', () => {
  const level = { correct: 10, incorrect: 10 };
  Object.entries(level).reduce((acc, cur) => {
    let cards = Array.from({ length: cur[1] }).fill(cur[0] === 'correct');
    return acc.concat(cards);
  }, []);
});
