
import {getLetterMatchCount} from './';

describe('Letter count helper', ()=>{
    const secretWord = 'party'
    test('returns the correct count when there is no matching letters', ()=>{
        const letterMatchCount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0);
    })

    test('returns the correct count when there are 3 matching letters', ()=>{
        const letterMatchCount = getLetterMatchCount('train', secretWord)
        expect(letterMatchCount).toBe(3);
    })

    test('return the correct count when there are duplicate letters in the guessword', ()=>{
        const letterMatchCount = getLetterMatchCount('parka', secretWord)
        expect(letterMatchCount).toBe(3)
    })
})