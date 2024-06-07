import Registration from "./registration";
import Login from "./Login";
import ForgotPassword from "./forgotPassword";
import React, { useState } from "react";
import './LoginHome.css'


const LoginHome = () => {
    const [activeTab, setActiveTab] = useState('sign-in');

    return (
        <div className="main">
            <div className="form">
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" checked={activeTab === 'sign-in'} onChange={() => setActiveTab('sign-in')} />
                        <label htmlFor="tab-1" className="tab">Sign In</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up" checked={activeTab === 'sign-up'} onChange={() => setActiveTab('sign-up')} />
                        <label htmlFor="tab-2" className="tab">Sign Up</label>
                        <input id="tab-3" type="radio" name="tab" className="forgot-password" checked={activeTab === 'forgot-password'} onChange={() => setActiveTab('forgot-password')} />
                        <label htmlFor="tab-3" className="tab">Forgot Password</label>

                        <div className="login-form">
                            {activeTab === 'sign-in' && <Login />}
                            {activeTab === 'sign-up' && <Registration />}
                            {activeTab === 'forgot-password' && <ForgotPassword />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default LoginHome;