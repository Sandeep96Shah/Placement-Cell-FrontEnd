import { combineReducers } from "redux";
import interview from "./interview";
import student from "./student";

export default combineReducers({
    interview,
    student,
})