import { actionTypes, correctGuess } from "./";

describe("CorrectGuess Action", () => {
  test("returns an action with type `CORRECT_GUESS`", () => {
    const action = correctGuess();
    expect(action).toEqual({type: actionTypes.CORRECT_GUESS});
  });
});
