import { actionTypes } from "../actions";

/**
 * @function success
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {boolean} new success state.
 */
export const success = (state = false, { type, payload }) => {
  switch (type) {
    case actionTypes.CORRECT_GUESS:
      return true;  
    default:
      return state;
  }
};
