import {
    FETCH_INTERVIEW,
    FETCH_STUDENT,
    ADD_INTERVIEW,
    ADD_STUDENT,
    UPDATE_STUDENT,
} from './actionTypes';
import { APIUrls } from '../helpers/apis';
import { getFormBody, getAuthTokenFromLocalStorage } from '../helpers/utils';


//action to validate the user
export function user(email, password, history){
    return (dispatch)=>{
        const url = APIUrls.signIn();
        fetch(url, {
            method:'POST',
            mode:"cors",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body : getFormBody({ email, password })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("response", data);
            if (data.success) {
                localStorage.setItem('token', data.data.token);
                history.push({pathname:'/dashboard', state:{user:data.user}});
                return;
              }
        })
        .catch((err)=>{
            console.log("error",err);
        })
    }
}

//action for signing up
export function signup(name, email, password, confirm_password, history){
    return (dispatch)=>{
        const url = APIUrls.signUp();
        fetch(url, {
            method:'POST',
            mode:"cors",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body : getFormBody({ name, email, password, confirm_password })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("response", data);
            history.push('/login');
        })
        .catch((err)=>{
            console.log("error",err);
        })
    }
}

//helper action to fetch all the students
export function all_students(){
    return (dispatch)=>{
        const url = APIUrls.allStudent();
        fetch(url, {
            method:'GET',
            mode:"cors",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            dispatch(fetch_student(data.students));
        })
        .catch((err)=>{
            console.log("error",err);
        })
    }
}

//helper action to fetch all the interviews
export function all_interviews(){
    return (dispatch)=>{
        const url = APIUrls.allInterview();
        fetch(url, {
            method:'GET',
            mode:"cors",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            dispatch(fetch_interview(data.interviews));
        })
        .catch((err)=>{
            console.log("error",err);
        })
    }
}

//action to fetch all the students
export function fetch_student(data){
    return {
        type:FETCH_STUDENT,
        payload:data,
    }
}

//action to fetch all the interviews
export function fetch_interview(data){
    return {
        type:FETCH_INTERVIEW,
        payload:data,
    }
}

//helper action to update the student when interview is added
export function update_student(company_name, date_of_interview, email){
    return (dispatch)=>{
        const url = APIUrls.updateStudent();
        fetch(url, {
            method:'POST',
            mode:"cors",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
            body : getFormBody({ company_name, date_of_interview, email }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("data Update Student",data);
            dispatch(updateStudent(data.interview, data.email))
        })
        .catch((err)=>{
            console.log("error",err);
        })
    }
}

//action to update the student when interview is added
export function updateStudent(data, email){
    return {
        type:UPDATE_STUDENT,
        payload:data,
        email,
    }
}

//helper action to add the interview
export function addInterview(company_name, date_of_interview, history){
    return (dispatch)=>{
        const url = APIUrls.addInterview();
        fetch(url, {
            method:'POST',
            mode:"cors",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
            body : getFormBody({ company_name, date_of_interview }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("data add interview",data.interview);
            dispatch(add_interview(data.interview));
            history.push('/dashboard');
        })
        .catch((err)=>{
            console.log("error",err);
        })
    }
}

//action to add the interview
export function add_interview(data){
    return {
        type:ADD_INTERVIEW,
        payload:data,
    }
}

//helper action to add the student
export function addStudent(name, email, batch, college, status, dsa, webD, react, company_name, date_of_interview, history){
    return (dispatch)=>{
        const url = APIUrls.addStudent();
        fetch(url, {
            method:'POST',
            mode:"cors",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
            body : getFormBody({name, email, batch, college, status, dsa, webD, react, company_name, date_of_interview }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("data add interview",data);
            dispatch(add_student(data.student));
            history.push('/dashboard');
        })
        .catch((err)=>{
            console.log("error",err);
        })
    }
}

//action to add the student
export function add_student(data){
    return {
        type:ADD_STUDENT,
        payload:data,
    }
}

//todo later
// export function external_jobs(){
//     return (dispatch) => {
//         const url = APIUrls.externalJobs();
//         fetch(url, {
//             method:'GET',
//             mode:"cors",
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
//             },
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log("external jobs information",data);
//         })
//         .catch((err)=>{
//             console.log("error ho gaya",err);
//         })
//     }
// }