import { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Sign Up");

    return (
        <div className='login-pop-up'>
            <form className='login-form'>
                <div className="form-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="form-inputs">
                    {currentState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Your Password' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create Your Account" : "Login"}</button>
                <div className="form-permission">
                    <input type="checkbox" id='check' required />
                    <label htmlFor='check'>By continuing, i agree to the terms of use & privacy policy. </label>
                </div>
                {currentState === "Login"
                    ? <p className=''>Create an new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
                    : <p className=''>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
                }


            </form>
        </div>
    )
}

export default LoginPopUp