import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStudent } from '../actions';

 const AddStudent = (props) => {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ batch, setBatch ] = useState("");
    const [ college, setCollege ] = useState("");
    const [ status, setStatus ] = useState("Not Placed");
    const [ dsa, setDsa ] = useState("");
    const [ webD, setWebD ] = useState("");
    const [ react, setReact ] = useState("");
    const [ companyName, setCompanyName ] = useState("");
    const [ date, setDate ] = useState("");

    const history = useHistory();

    const handleAdd = (e) => {
        e.preventDefault();
        console.log("add student");
        console.log("status", status);
        props.dispatch(addStudent(name, email, batch, college, status, dsa, webD, react, companyName, date, history))
    }
    return (
        <>
            <div className="idp_navbar">
                <Link to="/dashboard"><p className="home_btn">Back</p></Link>
                <div className="idp_header"><p>Add Student</p></div>
            </div>
            <div className="add_student_outer">
                <div className="add_student">
                    <form>
                        <label htmlFor="company_name">Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={ (e) => setName(e.target.value) }
                        />
                        <label htmlFor="date_of_interview">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={ (e) => setEmail(e.target.value) }
                        />
                        <label htmlFor="batch">Batch</label>
                        <input
                            type="text"
                            name="batch"
                            onChange={ (e) => setBatch(e.target.value) }
                        />
                        <label htmlFor="college">College</label>
                        <input
                            type="text"
                            name="college"
                            onChange={ (e) => setCollege(e.target.value) }
                        />
                        <label htmlFor="status">Status</label>
                        {/* <input
                            type="text"
                            name="status"
                            onChange={ (e) => setStatus(e.target.value) }
                        /> */}
                        <select id="status" name="status" onChange={ (e) => setStatus(e.target.value) }>
                            <option value="Not Placed">Not Placed</option>
                            <option value="Placed">Placed</option>
                        </select>
                        <label htmlFor="courses_scores">Curses Scores</label>
                        <ul>
                            <li>
                            <label htmlFor="dsa">DSA:</label>
                                <input
                                    type="text"
                                    name="dsa"
                                    onChange={ (e) => setDsa(e.target.value) }
                                />
                            </li>
                            <li>
                            <label htmlFor="webD">WebD:</label>
                                <input
                                    type="text"
                                    name="webD"
                                    onChange={ (e) => setWebD(e.target.value) }
                                />
                            </li>
                            <li>
                            <label htmlFor="react">React:</label>
                                <input
                                    type="text"
                                    name="react"
                                    onChange={ (e) => setReact(e.target.value) }
                                />
                            </li>
                        </ul>
                        <label>Add Interview</label>
                        <div className="interview_form">
                            <form id="interview_form_student">
                                <label htmlFor="company_name">Company Name</label>
                                <input
                                    type="text"
                                    name="company_name"
                                    onChange={ (e) => setCompanyName(e.target.value) }
                                />
                                <label htmlFor="date_of_interview">Date</label>
                                <input
                                    type="text"
                                    name="date_of_interview"
                                    onChange={ (e) => setDate(e.target.value) }
                                />
                            </form>
                        </div>
                        <button onClick={ (e) => handleAdd(e) } >ADD</button>
                    </form>
                </div>
            </div>
        </>
    )
}
function mapStateToprops(state){
    return{
       students:state.student,
       interview:state.interview,
    }
}

export default connect(mapStateToprops)(AddStudent);
