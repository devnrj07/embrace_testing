import moxios from "moxios";
import { actionTypes, correctGuess } from "./";
import { storeFactory } from "../tests/utils";
import { getSecretWord } from "./";

describe("getSecretWord action creator", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("add reponse from server to the state", () => {
    const secretWord = "party";
    const store = storeFactory();

    //make a mock server call
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});

describe("CorrectGuess Action", () => {
  test("returns an action with type `CORRECT_GUESS`", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
