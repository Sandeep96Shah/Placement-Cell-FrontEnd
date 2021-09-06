import React from 'react';
import { useHistory } from 'react-router-dom';
import '../index.css';

 const Student = (props) => {

    const { val, name, result } = props;
    console.log("student details", props);
    const history = useHistory();
    const handleDetail = () => {
        history.push({pathname:'/dashboard/student'}, props);
    }
    return (
        <>
            <div className="student_comp">
                <p className="student_name">{name}</p>
                { val ? <p className="detail_btn">{result}</p> : <p onClick={ () => handleDetail() } className="detail_btn">Details</p> }
            </div>
        </>
    )
}

export default Student;