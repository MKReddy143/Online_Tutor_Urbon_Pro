import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



const Registration = () => {
    const navigate = useNavigate();
    const [registration, setRegisterData] = useState({
        name: '',
        email: '',
        address: '',
        mobile: '',
        password: '',
        role: ''
    });
    const [registrationOtp, setRegistrationOtp] = useState({
        email: '',
        otp: ''
    });
    const [isOtpSentForRegistration, setIsOtpSentForRegistration] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registration,
            [name]: value
        });
    };

    const handleOtpChange = (e) => {
        const { name, value } = e.target;
        setRegistrationOtp({
            ...registrationOtp,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isOtpSentForRegistration) {
            try {
                const response = await axios.post('http://localhost:8080/api/register_otp', { email: registration.email });
                setIsOtpSentForRegistration(true);
                if (response.status === 200) {
                    alert("OTP sent, please validate it.");
                } else {
                    alert("Data already exists.");
                }
            } catch (error) {
                alert("Data already exists.");
                console.error("There was an error sending OTP", error);
            }
        } else {
            try {
                const response = await axios.post('http://localhost:8080/api/create_profile', {
                    ...registration,
                    otp: registrationOtp.otp
                });

                if (response.status === 200) {
                    navigate('/homePage');
                } else {
                    alert(response.data);
                }
            } catch (error) {
                alert("Invalid OTP.");
                console.error("There was an error with registration", error);
            }
        }
    };

    return (
        <div className="sign-up-htm">
            <form onSubmit={handleSubmit}>
                <div className="group">
                    <label htmlFor="regName" className="label">Name</label>
                    <input id="regName" type="text" name="name" className="input" onChange={handleChange} value={registration.name} />
                </div>
                <div className="group">
                    <label htmlFor="regEmail" className="label">Email</label>
                    <input id="regEmail" type="email" name="email" className="input" onChange={handleChange} value={registration.email} />
                </div>
                <div className="group">
                    <label htmlFor="regMobile" className="label">Mobile</label>
                    <input id="regMobile" type="text" name="mobile" className="input" onChange={handleChange} value={registration.mobile} />
                </div>
                <div className="group">
                    <label htmlFor="regAddress" className="label">Address</label>
                    <input id="regAddress" type="text" name="address" className="input" onChange={handleChange} value={registration.address} />
                </div>
                <div className="group">
                    <label htmlFor="regRole" className="label">Role</label>
                    <select id="regRole" name="role" className="input" onChange={handleChange} value={registration.role}>
                        <option value="">Select</option>
                        <option value="student">Student</option>
                        <option value="tutor">Tutor</option>
                    </select>
                </div>
                <div className="group">
                    <label htmlFor="regPassword" className="label">Password</label>
                    <input id="regPassword" type="password" name="password" className="input" onChange={handleChange} value={registration.password} />
                </div>
                {isOtpSentForRegistration && (
                    <div className="group">
                        <label htmlFor="regOtp" className="label">OTP</label>
                        <input id="regOtp" type="text" name="otp" className="input" onChange={handleOtpChange} value={registrationOtp.otp} />
                    </div>
                )}
                <br />
                <div className="group">
                    <button type="submit" className="button">
                        {isOtpSentForRegistration ? "Verify & Register" : "Send OTP"}
                    </button>
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                    <label htmlFor="tab-1" className="tab">Already Member? <a href="#">Login</a></label>
                </div>
            </form>
        </div>
    );
}
export default Registration;
