import {ADD_INTERVIEW, FETCH_INTERVIEW } from '../actions/actionTypes';

const initialState = {
    interviews:[],
}

export default function interview(state=initialState, action){
    switch(action.type){
        case FETCH_INTERVIEW:
            return {
                ...state,
                interviews:action.payload,
            }
        case ADD_INTERVIEW:
            return {
                ...state,
                interviews:[...state.interviews, action.payload]
            }
        default:
            return state;
    }
}