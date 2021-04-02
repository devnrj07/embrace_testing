import checkPropTypes from "check-prop-types";
import { createStore } from "redux";
import {successReducer} from '../reducers/successReducer'
export const findEleByTestAttr = (wrapper, test_attr) => {
  return wrapper.find(`[data-test="${test_attr}"]`);
};

export const checkProps = (
  componentPropTypes,
  expectedProps,
  componentName,
  property = "prop",
) => {
  const propError = checkPropTypes(
    componentPropTypes,
    expectedProps,
    property,
    componentName
  );
  expect(propError).toBeUndefined();
};

export const storeFactory = (initalState)=>{
  return createStore(successReducer, initalState)
}