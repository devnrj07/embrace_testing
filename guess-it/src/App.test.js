import { shallow } from "enzyme";

import App, { UnConnectedApp } from "./App";
import { storeFactory } from "./tests/utils";

const setup = (initialState) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />);
  return wrapper;
};

describe("redux properties", () => {
  test("has access to `success` state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test("has access to `secret word` state", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test("has access to `guessedWords` state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toBe(guessedWords);
  });
  test("`getSecretWord` action creator is of type function prop", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

describe("`getSecretWord` runs on APP mount", () => {
  const getSecretWordMock = jest.fn();

  const props = {
    success: false,
    getSecretWord: getSecretWordMock,
    guessedWords: [],
  };
  //setup component with mock action/function
  const wrapper = shallow(<UnConnectedApp {...props} />);

  //run lifecycle methods
  wrapper.instance().componentDidMount();

  //check if mock method ran
  const getSecretWordcallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordcallCount).toBe(1);
});
