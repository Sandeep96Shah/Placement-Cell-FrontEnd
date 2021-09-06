import React from 'react';
import { useHistory } from 'react-router';
import '../index.css';

 const Interview = (props) => {

    const history = useHistory();
    const { val, name, result, students } = props;
    console.log("studentsss", students);
    const interviewDetails = {
        students,
        name,
    }
    const handleDetail = () => {
        history.push({pathname:'/dashboard/interview'}, interviewDetails);
    }
    return (
        <>
            <div className="interview_comp">
                <p className="student_name">{name}</p>
                { val ? <p className="detail_btn" >{result}</p> : <p className="detail_btn" onClick={ () => handleDetail() } >Details</p> }
                
            </div>
        </>
    )
}

export default Interview;