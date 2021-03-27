import { shallow } from "enzyme";
import { checkProps, findEleByTestAttr } from "../tests/utils";
import GuessWord from "./GuessWord";

const defaultProps = {
  guessedWords: [{ guessword: "apple", letterMatchCount: 3 }],
};

const setup = (props) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessWord {...setupProps} />);
};

test("it doesn't throw warning with expected props", () => {
    checkProps(GuessWord.propsType, defaultProps, GuessWord.name);
});

describe("if there are no words guessed", () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({guessedWords:[]})
    })
 test("it renders correctly", () => {
    const component = findEleByTestAttr(wrapper, "component-guesswords");
    expect(component.length).toBe(1);
  });

  test('it renders instructions to guess a word', ()=>{
    const instructions = findEleByTestAttr(wrapper, 'guesswords-instructions')
    expect(instructions.text()).not.toBe(0)
  })
});

describe('if there are words guessed', ()=>{
    let wrapper;
    let guessedWords = [
        {guessedWord:'train', letterMatchCount:2},
        {guessedWord:'agile', letterMatchCount:3},
        {guessedWord:'party', letterMatchCount:4},
        
    ];

    beforeEach(()=>{
        wrapper = setup({guessedWords})
    })
    
    test('it renders correctly',()=>{
        const component = findEleByTestAttr(wrapper, 'component-guesswords')
        expect(component.length).toBe(1)
    })

    test('it renders the guessed words section', ()=>{
        const guessedWordsNode = findEleByTestAttr(wrapper, 'guessed-words')
        expect(guessedWordsNode.length).toBe(1)
    })

    test('it has right words in the array', ()=>{
        const guessedWordNodes = findEleByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordNodes.length).toBe(guessedWords.length)
    })
})
