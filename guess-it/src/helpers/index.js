export const getLetterMatchCount = (guessWord, secretWord) => {
  const guessedLetters = new Set(guessWord.split(""));
  const secretLetters = new Set(secretWord.split(""));
  return [...secretLetters].filter(letter => guessedLetters.has(letter)).length;
};
