import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
const ForgotPassword = () => {
    const navigate = useNavigate();
    const [forgotPassword, setForgotPassword] = useState({
        email: '',
        otp: '',
        password: ''
    });
    const [isOtpSent, setIsOtpSent] = useState(false);

    const forgotPasswordChange = (e) => {
        const { name, value } = e.target;
        setForgotPassword({
            ...forgotPassword,
            [name]: value
        });
    };

    const forgotPasswordSubmit = async (e) => {
        e.preventDefault();
        if (!isOtpSent) {
            try {
                const response = await axios.post('http://localhost:8080/api/forgot_password', { email: forgotPassword.email });
                setIsOtpSent(true);
                alert("OTP sent to email for password reset.");
            } catch (error) {
                alert("Account does not exist.");
                console.error("There was an error sending OTP", error);
            }
        } else {
            try {
                const response = await axios.post('http://localhost:8080/api/reset_password', forgotPassword);
                alert("Password reset successful!");
                navigate('/homePage');
            } catch (error) {
                alert("Invalid OTP.");
                console.error("There was an error resetting the password", error);
            }
        }
    };

    return (
        <div className="forgot-password-htm">
            <form onSubmit={forgotPasswordSubmit}>
                <div className="group">
                    <label htmlFor="forgotEmail" className="label">Email</label>
                    <input id="forgotEmail" type="email" name="email" className="input" onChange={forgotPasswordChange} value={forgotPassword.email} />
                </div>
                {isOtpSent && (
                    <>
                        <div className="group">
                            <label htmlFor="otp" className="label">OTP</label>
                            <input id="otp" type="text" name="otp" className="input" onChange={forgotPasswordChange} value={forgotPassword.otp} />
                        </div>
                        <div className="group">
                            <label htmlFor="newPassword" className="label">New Password</label>
                            <input id="newPassword" type="password" name="password" className="input" onChange={forgotPasswordChange} value={forgotPassword.password} />
                        </div>
                    </>
                )}
                <br />
                <div className="group">
                    <button type="submit" className="button">
                        {isOtpSent ? "Reset Password" : "Send OTP"}
                    </button>
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                    <label htmlFor="tab-1" className="tab">Remembered? <a href="#">Login</a></label>
                </div>
            </form>
        </div>
    );

};
export default ForgotPassword;