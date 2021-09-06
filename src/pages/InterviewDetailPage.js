import React from 'react';
import { Link } from 'react-router-dom';
import Student from '../components/Student';

 const InterviewDetailPage = (props) => {
     console.log("interviewdetailpage", props);
     const detail = props.location.state.students;
     const name = props.location.state.name;
    return (
        <div>
            <div className="idp_navbar">
                <Link to="/dashboard"><p className="home_btn">Back</p></Link>
                <div className="idp_header"><p>{name}</p></div>
            </div>
            <div className="idp_container">
                <div className="idp_list">
                    {
                        detail.length>0 ?
                        detail.map((student) => <Student 
                                                    val={true} 
                                                    name={student.student.name} 
                                                    result={student.result}  
                                                    />) :
                        <h1>Please Add Student</h1>
                    }
                </div>
            </div>
        </div>
    )
}
export default InterviewDetailPage;
