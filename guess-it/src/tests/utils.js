import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import { middlewares } from "../configureStore";
import { success } from "../reducers/successReducer";

export const findEleByTestAttr = (wrapper, test_attr) => {
  return wrapper.find(`[data-test="${test_attr}"]`);
};

export const checkProps = (
  componentPropTypes,
  expectedProps,
  componentName,
  property = "prop"
) => {
  const propError = checkPropTypes(
    componentPropTypes,
    expectedProps,
    property,
    componentName
  );
  expect(propError).toBeUndefined();
};

export const storeFactory = (initalState = {}) => {
  const createStoreWithMiddleWare = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleWare(success, initalState);
};
