import React from 'react'
import './LoginAs.css';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';

function LoginAs() {
    const [{user}, dispatch] = useStateValue();
    
    const patientSelected = () => {
        dispatch({
            type: "SET_USER",
            user: 'patient'
        })
    }

    const doctorSelected = () => {
        dispatch({
            type: "SET_USER",
            user: 'doctor'
        })
    }

    return (
        <div className="loginAs">
            <h2>Register As</h2>
            <div className="images">
            <Link to="/register" onClick={patientSelected} className="login__link">
                <div className="imag">
                    <img src="data:image/png;base64,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" alt=""/>
                    <h5>Patient</h5>
                </div>
            </Link>

            <Link to="/register" onClick={doctorSelected} className="login__link">
                <div className="imag2">
                    <img src="https://www.browardhealth.org/-/media/BH_Doctor_Images/228702.jpg" alt=""/>   
                    <h5>Doctor</h5> 
                </div>
            </Link>
            </div>

        </div>
    )
}

export default LoginAs;
