import { actionTypes } from "../actions";

export const secretWord = (state = null, { action, payload }) => {
  switch(action){
    case actionTypes.SET_SECRET_WORD:
      return payload
    default:
      return state;  
  }
};
