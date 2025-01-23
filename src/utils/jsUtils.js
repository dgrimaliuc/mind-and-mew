export function combineClasses(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 *
 * This function generates an array of cards based on the level object.
 * @param {Object} level - Object with format { correct: number, incorrect: number, placeholder: number }
 * @output {Array} - Array of cards with the correct, incorrect or placeholder elements shuffled.
 **/
export function generateCards(level) {
  return Object.entries(level)
    .reduce((acc, cur) => {
      let cards = Array.from({ length: cur[1] }).fill(cur[0]);
      return acc.concat(cards);
    }, [])
    .sort(() => Math.random() - 0.5);
}
