import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = {}) => {
  const wrapper = shallow(<App {...props} />);
  if (state) return wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("render without error", () => {
  const wrapper = setup();
  const appComponentContainer = findByTestAttr(wrapper, "component-app");
  expect(appComponentContainer.length).toBe(1);
});

test("render counter display", () => {
  const wrapper = setup();
  const appComponentTitle = findByTestAttr(wrapper, "component-title");
  expect(appComponentTitle.length).toBe(1);
});

test("render increment button", () => {
  const wrapper = setup();
  const appComponentINCBtn = findByTestAttr(wrapper, "component-btn-inc");
  expect(appComponentINCBtn.length).toBe(1);
});

test("it has a state and set to 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

test("btn click increments counter display", () => {
  const counter = 9;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, "component-btn-inc");

  button.simulate("click");
  wrapper.update();

  const displayElement = findByTestAttr(wrapper, "component-title");
  expect(displayElement.text()).toContain(counter + 1);
});

test("it renders decrement button", () => {
  const wrapper = setup();
  const decBtn = findByTestAttr(wrapper, "component-btn-dec");
  expect(decBtn.length).toBe(1);
});

test("on btn click counter decrements the counter display", () => {
  const counter = 8;
  const wrapper = setup(null, { counter });
  const decBtn = findByTestAttr(wrapper, "component-btn-dec");

  decBtn.simulate("click");
  wrapper.update();
  const displayElement = findByTestAttr(wrapper, "component-title");
  expect(displayElement.text()).toContain(counter - 1);
});

test('on btn click if counter is 0 , it displays error message and set state to 0. ', ()=>{
  const counter = 0;
  const wrapper = setup(null, {counter})
  const decBtn = findByTestAttr(wrapper, 'component-btn-dec')

  decBtn.simulate('click')
  wrapper.update()

  const displayElement = findByTestAttr(wrapper, 'component-title')
  expect(displayElement.text()).toContain('Error')
  setTimeout(()=>{expect(displayElement.text()).toContain(0)}, 100) 
})
