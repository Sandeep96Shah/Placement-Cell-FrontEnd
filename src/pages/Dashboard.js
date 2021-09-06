import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Student from '../components/Student';
import Interview from '../components/Interview';
import { all_students, all_interviews } from '../actions';

import { CSVLink } from'react-csv';

import { FaDownload } from 'react-icons/fa';

const Dashboard = (props) => {
    useEffect(() => {
        props.dispatch(all_students());
        props.dispatch(all_interviews());
    },[]);
    // console.log("Dashboard props", props);
    // console.log("interviews", props.interview.interviews);
    // console.log("students", props.students.students);
    const interviews = props.interview.interviews;
    const students = props.students.students;
    const handleSignOut = () => {
        localStorage.removeItem('token');
    }

    // const handleExternalJobs = () => {
    //     props.dispatch(external_jobs());
    // }

    const headerStudent = [
        { label : "Name", key : "name" },
        { label : "Email", key : "email" },
        { label : "Status", key : "status" },
        { label : "Batch", key : "batch" },
        { label : "College", key : "college" },
        { label : "React", key : "react" },
        { label : "DSA", key : "dsa" },
        { label : "WebD", key : "webD" },
        { label : "Interviews", key : "interviews" }
    ];

    const studentData = students.map((student) => ({
        name : student.name,
        email : student.email,
        status: student.status,
        batch : student.batch,
        college : student.college,
        dsa : student.courses_scores[0].dsa,
        webD : student.courses_scores[1].webD,
        react : student.courses_scores[2].react,
        interviews : student.interviews.map(interview => ("   " + interview.company_name + " On " + interview.date_of_interview + " Result " + interview.result)), 

    }))

    const csvStudent = {
        filename : "student.csv",
        headers : headerStudent,
        data : studentData,
    }

    const headerInterview = [
        { label : "Name", key : "company_name" },
        { label : "Date", key : "date_of_interview" },
        { label : "Students", key : "students" },
    ]

    const interviewData = interviews.map((interview) => ({
        company_name : interview.company_name,
        date_of_interview : interview.date_of_interview,
        students : interview.students.map((student) => ("   " +  student.student.name + " => " + student.result)),
    }))

    const csvInterview = {
        filename : "interview.csv",
        headers : headerInterview,
        data : interviewData,
    }

    return (
        <div>
            <div className="dashboard_navbar">
                {/* <p onClick={ () => handleExternalJobs() }className="external_jobs" >External Jobs</p> */}
                <Link to="/"><p className="signout" onClick={ () => handleSignOut() }>Sign Out</p></Link>
                <div className="dashboard_header"><p>Welcome Teacher</p></div>
            </div>
            <div className="student_body">
                <div className="student_container">
                    <div className="student_div"> 
                        <div className="student_header">
                            {/* added csv */}
                            <CSVLink {...csvStudent} ><p className="download"><FaDownload /></p></CSVLink>
                            <p>Students</p>
                            <Link to='/dashboard/addStudent'><p className="student_header_add">ADD</p></Link>
                        </div>
                        <div className="student_list">
                            {
                                students.length>0 ?
                                students.map((student) => <Student 
                                                            name={student.name} 
                                                            key={student._id}
                                                            batch={student.batch}
                                                            courses_scores={student.courses_scores}
                                                            email={student.email}
                                                            college={student.college}
                                                            status={student.status}
                                                            interviews={student.interviews}
                                                            />) :
                                <h1>Please Add Student</h1>
                            }
                        </div>
                    </div>
                </div>
                <div className="interview_container">
                    <div className="interview_div"> 
                        <div className="interview_header">
                        <CSVLink {...csvInterview} ><p className="download"><FaDownload /></p></CSVLink>
                            <p>Interviews</p>
                            <Link to='/dashboard/addInterview'><p className="interview_header_add">ADD</p></Link>
                        </div>
                        <div className="interview_list">
                            {
                                interviews.length> 0 ?
                                interviews.map((interview) => <Interview 
                                                                name={interview?.company_name} 
                                                                key={interview?._id}
                                                                students={interview?.students}
                                                                />) :
                                <h1>Please Add Interview</h1>
                            }
                        </div>
                    </div>
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

export default  connect(mapStateToprops)(Dashboard);