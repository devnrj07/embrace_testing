import { actionTypes } from "../actions";
import { success } from "./successReducer";

describe("test cases for successReducer function", () => {
  test("return false as default/initial state", () => {
    const newState = success(undefined, {});
    expect(newState).toBe(false); // toBe is for immutable data type & toEqual for mmutable data(objects)
  });

  test("returns true when actionTypes is CORRECT_GUESS", () => {
    const newState = success(undefined, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true);
  });
});
