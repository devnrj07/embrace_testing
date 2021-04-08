import { actionTypes } from "../actions";


/**
 * @function guessedWords
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {boolean} new success state.
 */
export const guessedWords = (state = [], { action, payload }) => {
  switch (action) {
    case actionTypes.GUESS_WORD:
      return [...state, payload]
    default:
        return state;
    }
};
