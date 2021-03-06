import axios from "axios";
import { getLetterMatchCount } from "../helpers/index";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
};

/**
 * @function correctGuess
 * @returns {object} Action Object with type 'CORRECT_GUESS'
 */

export const correctGuess = () => {
  return { type: actionTypes.CORRECT_GUESS };
};

export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const { secretWord } = getState();
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};

export const getSecretWord = () => {
  return (dispatch) => {
    axios.get("http://localhost:3021");
  };
};
