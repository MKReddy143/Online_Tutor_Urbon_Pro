import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Login = () => {
    const [login, setLoginData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const loginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...login,
            [name]: value
        });
    };

    const loginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/login', login);
            if (response.status === 200) {
                localStorage.setItem('email',login.email);
                navigate('/homePage');
            } else {
                alert("Invalid details!!!");
            }
        } catch (error) {
            alert("Invalid email and password details");
        }
    };

    return (
        <div className="login-form">
            <div className="sign-in-htm">
                <form onSubmit={loginSubmit}>
                    <div className="group">
                        <label htmlFor="loginEmail" className="label">Email</label>
                        <input id="loginEmail" type="email" name="email" className="input" onChange={loginChange} value={login.email} />
                    </div>
                    <div className="group">
                        <label htmlFor="loginPassword" className="label">Password</label>
                        <input id="loginPassword" type="password" name="password" className="input" onChange={loginChange} value={login.password} />
                    </div>
                    <br />
                    <div className="group">
                        <button type="submit" className="button">Log in</button>
                    </div>
                </form>
                <div className="hr"></div>
                <div className="foot-lnk">
                    <label htmlFor="tab-3" className="tab">Forgot Password?</label>
                </div>
            </div>
        </div>
    );
};
export default Login;