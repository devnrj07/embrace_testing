import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import checkPropTypes from 'check-prop-types';
import App from "../App";
import Success from "./Success";
import { findEleByTestAttr } from "../tests/utils";


Enzyme.configure({ adapter: new EnzymeAdapter() });

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

test('no warning with the expected props', ()=>{
    const expectedProps = { success: false};

    const propError = checkPropTypes(Success.propTypes, expectedProps, 'prop', Success.name)
    expect(propError).toBeUndefined();
})