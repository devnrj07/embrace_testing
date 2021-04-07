import { guessWord } from "./actions";
import { storeFactory } from "./tests/utils";

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const unsuccessfulGuess = "train";
  describe("no words guessed", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };

      expect(newState).toEqual(expectedState);
    });
    test("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const updatedState = store.getState();

      const expectedState = {
        secretWord,
        success: true,
        guessWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };
      console.log({updatedState})
      expect(updatedState).toEqual(expectedState);
    });
  });

  describe("some guessed words", () => {
    test("update state correctly for unsuccessful guess", () => {});

    test("updates state correctly for successful guess", () => {});
  });
});
