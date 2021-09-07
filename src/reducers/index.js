import { combineReducers } from "redux";
import interview from "./interview";
import student from "./student";

//function to combine all the reducers
export default combineReducers({
    interview,
    student,
})