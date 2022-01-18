import { SET_USER_ID } from './actions.js';

const initialSate = {
    uid: '',
}

export const uidReducer = (state = initialSate, action) =>{
    switch(action.type){
        case SET_USER_ID:
            return {...state, uid: action.payload}
        default:
            return state;
    }
}
