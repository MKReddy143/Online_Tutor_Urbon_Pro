import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TutorDemoVideos from './TutorDemoVideos';
import Sidebar from '../Sidebar';
import TutorProfileList from './TutorsProfilesList';
import Settings from '../AccountManangment/SettingSection';
// import Settings from '../AccountManangment/SettingSection';
// import History from './History';
// import Enquiry from './Enquiry';
// import MyClasses from './MyClasses';
// import FAQ from './FAQ';
// import Logout from './Logout';
// import Videos from './Videos';
// import GymYoga from './GymYoga';
// import Profiles from './Profiles';

const DashBoard = () => {
    return (
        <div className="main-content">
            <h2>Wlecome to Online Tutor</h2>
            <div className="top-images">
                <img src='https://th.bing.com/th/id/OIP.GRNT2WUo9TYmndudamBR8wHaE7?w=301&h=200&c=7&r=0&o=5&pid=1.7' />
                <img src="https://th.bing.com/th/id/OIP.Fjp06PvnnWIdQHMXrWcu_QHaE8?w=229&h=180&c=7&r=0&o=5&pid=1.7" />
                <img src="https://th.bing.com/th/id/OIP.ezCS-IM2IWffcP1hwX4fpwHaE8?w=274&h=183&c=7&r=0&o=5&pid=1.7" />
                <img src="https://th.bing.com/th/id/OIP.j5U_rYWHjVcvO3VJRqDwPQHaE8?w=251&h=180&c=7&r=0&o=5&pid=1.7" />
            </div>
            <TutorDemoVideos />
            <Sidebar />
            <TutorProfileList />
        </div>
    );
};

export default DashBoard;