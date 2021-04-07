export const actionTypes = {
    CORRECT_GUESS:'CORRECT_GUESS',
    GUESS_WORD : 'GUESS_WORD'
}

/**
 * @function correctGuess
 * @returns {object} Action Object with type 'CORRECT_GUESS'
 */

export const correctGuess = () =>{
    return {type:actionTypes.CORRECT_GUESS};
}

export const guessWord = (guessWord) =>{
    return function(dispatch, getState){}
}