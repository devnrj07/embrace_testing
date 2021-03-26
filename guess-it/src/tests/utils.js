import checkPropTypes from "check-prop-types";

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
