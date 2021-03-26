import { shallow } from "enzyme";

import App from "../App";
import Success from "./Success";
import { findEleByTestAttr, checkProps } from "../tests/utils";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Success {...props} />);
  if (state) return wrapper.setState(state);
  return wrapper;
};

it("renders the component.", () => {
  const wrapper = shallow(<App />);
  const component = wrapper.find('[data-test="component-app"]');
  expect(component.length).toBe(1);
});

it("has no message element when success is false", () => {
  const wrapper = setup({ success: false });
  const element = findEleByTestAttr(wrapper, "component-success");
  expect(element.text()).toBe("");
});

it('displays "Congrats! You guessed it message" on correct guess', () => {
  const wrapper = setup({ success: true });
  const element = findEleByTestAttr(wrapper, "component-success");
  expect(element.text()).toContain("Congrats!");
  expect(element.text().length).not.toBe(1);
});

test("no warning with the expected props", () => {
  const expectedProps = { success: true };
  checkProps(Success.propsType, expectedProps, Success.name);
});
