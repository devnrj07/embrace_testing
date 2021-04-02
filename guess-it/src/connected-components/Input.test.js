import {shallow} from 'enzyme';
import {findEleByTestAttr, storeFactory} from '../tests/utils'
import Input from '../connected-components/Input'

const setup = (initialStore ={}) =>{
    const store = storeFactory(initialStore) 
    const wrapper = shallow(<Input store={store}/>).dive(); //use dive to get access to base component from higher order component
}

describe('input element renders', ()=>{
    describe('words has been guessed', ()=>{
        test('renders component without error', ()=>{
            const wrapper = setup()
            
        })
        test('renders submit button', ()=>{
            const wrapper = setup()
        
        })
        test('word has been guessed',()=>{

        })
    })

    describe('word has been guessed', ()=>{
        test('does not renders component without error', ()=>{

        })
        test('does not renders submit button', ()=>{

        })
        test('word has not been guessed',()=>{

        })
    })
    
})