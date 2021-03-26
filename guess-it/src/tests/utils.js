export const findEleByTestAttr = (wrapper, test_attr) => {
  return wrapper.find(`[data-test="${test_attr}"]`);
};
