import React,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import  jwt_decode from 'jwt-decode'; 
import { connect } from 'react-redux';
import '../index.css';
import { signup } from '../actions';

const HomePage = (props) => {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPpassword, setConfirmPassword ] = useState("");
    
    const history = useHistory();
    const token = localStorage.getItem('token');
    if(token){
    const user = jwt_decode(token);
    console.log("user", user);
    history.push('/dashboard');
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        props.dispatch(signup(name, email, password, confirmPpassword, history));
    }

    return (
        <div>
            <div className="home_navbar">
                <div className="home_header"><p>Placement Cell</p></div>
                <Link to='/login'><p className="signin">SignIn</p></Link>
            </div>
            <div className="homepage_container">
                <div className="quote_container">
                    <div className="quote">
                        <p>
                            Teaching isnot about information. It's about
                            having an honest intellectual relationship 
                            with your students.
                        </p>
                    </div>
                    <div className="quote">
                        <p>
                        There are always two sides to the coins. 
                        Behind every successful person, there are 
                        some teachers who always trust them. They 
                        encourage them and motivate them. Teaching 
                        is not a just profession but a great responsibility.
                        </p>
                    </div>
                </div>
                <div className="signup_container">
                    <div className="signup_div">
                        <div className="signup_header"><p>Sign Up</p></div>
                        <div className="form_container">
                            <form>
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text"  
                                    name="name"
                                    onChange={ (e) => setName(e.target.value) }    
                                />
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email"  
                                    name="email"
                                    onChange={ (e) => setEmail(e.target.value) }   
                                />
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password"  
                                    name="password"
                                    onChange={ (e) => setPassword(e.target.value) }    
                                />
                                <label htmlFor="confirm_password">Confirm Password</label>
                                <input 
                                    type="password"  
                                    name="confirm_password"
                                    onChange={ (e) => setConfirmPassword(e.target.value) }   
                                />
                                <button onClick={ (e) => handleSignUp(e) }>Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        students:state.student,
        interview:state.interview,
    };
  }

export default connect(mapStateToProps)(HomePage);
