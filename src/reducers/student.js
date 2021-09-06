import {ADD_STUDENT, FETCH_STUDENT, UPDATE_STUDENT } from '../actions/actionTypes';

const initialState = {
    students:[],
}

export default function student(state=initialState, action){
    switch(action.type){
        case FETCH_STUDENT:
            return {
                ...state,
                students:action.payload,
            }
        case ADD_STUDENT:
            return {
                ...state,
                students:[...state.students, action.payload]
            }
        case UPDATE_STUDENT:
            const index = state.students.findIndex((student) => student.email === action.email);
            state.students[index].interviews.push(action.payload);
            return {...state}
        default:
            return state;
    }
}