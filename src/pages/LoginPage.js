import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import '../index.css';
import { user } from '../actions/index';

const LoginPage = (props) => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch(user(email,password, history));
    }
    return (
        <div>
            <div className="home_navbar">
                <Link to="/"><p className="home_btn">Home</p></Link>
                <div className="home_header"><p>Placement Cell</p></div>
            </div>
            <div className="signin_container">
                <div className="signin_div">
                    <p>Sign In</p>
                {/* </div>
                <div> */}
                <form>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                    <div className="signin_btn">
                        <button onClick={ (e) => handleSubmit(e) }>SignIn</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}
function mapStateToProps(state) {
    return {
      student:state.student,
      interview:state.interview,
    };
}

export default connect(mapStateToProps)(LoginPage);
