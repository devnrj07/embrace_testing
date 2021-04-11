import { shallow } from "enzyme";
import { findEleByTestAttr, storeFactory } from "../tests/utils";
import Input from "../connected-components/Input";

const setup = (initialStore = {}) => {
  const store = storeFactory(initialStore);
  const wrapper = shallow(<Input store={store} />).dive(); //use dive to get access to base component from higher order component
  return wrapper;
};

describe("input element renders", () => {
  describe("words has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const component = findEleByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test("renders input box without errors", () => {
        const component = findEleByTestAttr(wrapper, 'input-box');
        expect(component.length).toBe(1);
      });
    test("renders submit button", () => {
      const submut_btn = findEleByTestAttr(wrapper, 'submit-btn');
      expect(submut_btn.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { succes: true };
      wrapper = setup(initialState);
    });
    test("does not renders component without error", () => {
     const component = findEleByTestAttr(wrapper, 'component-input')
     console.log({component})
     expect(component.length).toBe(0)
    });
    test("does not renders submit button", () => {
        const submitBtn = findEleByTestAttr(wrapper, 'submit-btn')
        expect(submitBtn.length).toBe(0)
    });
  });
});

describe("redux props", ()=>{
  test('has success piece of a state prop', ()=>{
    const success = true;
    const wrapper = setup({success});
    const successProps = wrapper.instance().props.success;
    expect(successProps).toBe(success);
    
  })
  test('`guessWord` creator is a function type prop', ()=>{
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  })
})
