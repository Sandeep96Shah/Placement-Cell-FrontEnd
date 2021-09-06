import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Interview from '../components/Interview';
import { update_student } from '../actions';

const StudentDetailPage = (props) => {
    const [add, setAdd] = useState(false);
    const [ companyName, setCompanyName ] = useState("");
    const [ date, setDate ] = useState("");
    const handleAdd = () => {
        setAdd(!add);
    }
    console.log("studentDetailPage", props.location.state);
    const detail = props.location.state;

    const handleUpdateStudent = (e) => {
        e.preventDefault();
        props.dispatch(update_student(companyName, date, detail.email));
        setAdd(false);
    }

    return (
        <div>
            <div className="sdp_navbar">
                <Link to="/dashboard"><p className="home_btn">Back</p></Link>
                <div className="sdp_header"><p>{detail.name}</p></div>
            </div>
            <div className="sdp_container">
                <div className="sdp_div">
                    <div>
                        <div className="sdp_field">
                            <p className="sdp_property">Email: </p><p className="sdp_value">{detail.email}</p>
                        </div>
                    </div>
                    <div>
                        <div className="sdp_field">
                            <p className="sdp_property">Batch: </p><p className="sdp_value">{detail.batch}</p>
                        </div>
                    </div>
                    <div>
                        <div className="sdp_field">
                            <p className="sdp_property">College: </p><p className="sdp_value">{detail.college}</p>
                        </div>
                    </div>
                    <div>
                        <div className="sdp_field">
                            <p className="sdp_property">Courses: </p><p className="sdp_value">
                                <ul>
                                    <li><div className="sdp_field"><p className="sdp_property_li">DSA:</p><p className="sdp_value_li">{detail.courses_scores[0].dsa}</p></div></li>
                                    <li><div className="sdp_field"><p className="sdp_property_li">WebD:</p><p className="sdp_value_li">{detail.courses_scores[1].webD}</p></div></li>
                                    <li><div className="sdp_field"><p className="sdp_property_li">React:</p><p className="sdp_value_li">{detail.courses_scores[2].react}</p></div></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div><p className="sdp_property">Interviews</p></div>
                    <div className="sdp_interview">
                        {
                            detail.interviews.length > 0 ?
                            detail.interviews.map((interview) => <Interview 
                                                                    val={true} 
                                                                    name={interview.company_name} 
                                                                    result={interview.result} 
                                                                    />) :
                            <h1>Please Add Interview</h1>
                        }
                    </div>
                    <p className="interview_form_p" onClick={ () => handleAdd() }>{add ? "Cancel" : "Add Interview" }</p>
                        {
                            add && 
                            <div className="interview_form">
                                <form>
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
                                    <button onClick={ (e) => handleUpdateStudent(e) } >ADD</button>
                                </form>
                            </div>
                        }
                </div>
            </div>
        </div>
    )
}

function mapStateToprops(state){
    return{
       students:state.student,
       interview:state.interview,
    }
}

export default connect(mapStateToprops)(StudentDetailPage);
