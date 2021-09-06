import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import '../index.css';
import { addInterview } from '../actions/index';

 function AddInterview(props) {

     const [ companyName, setCompanyName ] = useState("");
     const [ date, setDate ] = useState("");

     const history = useHistory();

     const handleAdd = (e) => {
         e.preventDefault();
         console.log("add interview", companyName, date);
         props.dispatch(addInterview(companyName, date, history));
     }
    return (
        <>
            <div className="idp_navbar">
                <Link to="/dashboard"><p className="home_btn">Back</p></Link>
                <div className="idp_header"><p>Add Interview</p></div>
            </div>
            <div className="add_interview">
                <div className="interview_form">
                    <form>
                        <label htmlFor="company_name">Company Name</label>
                        <input
                            type="text"
                            name="company_name"
                            //value={companyName}
                            onChange={ (e) => setCompanyName(e.target.value) }
                        />
                        <label htmlFor="date_of_interview">Date</label>
                        <input
                            type="text"
                            name="date_of_interview"
                            //value={date}
                            onChange={ (e) => setDate(e.target.value) }
                        />
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

export default connect(mapStateToprops)(AddInterview);
