import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Settings from './Settings';
// import History from './History';
// import Enquiry from './Enquiry';
// import MyClasses from './MyClasses';
// import FAQ from './FAQ';
// import Logout from './Logout';
// import Videos from './Videos';
// import GymYoga from './GymYoga';
// import Profiles from './Profiles';

const MainContent = () => {
  return (
    <div className="main-content">
     
      <div className="top-images">
        <img src="https://th.bing.com/th/id/OIP.Fjp06PvnnWIdQHMXrWcu_QHaE8?w=229&h=180&c=7&r=0&o=5&pid=1.7" alt="Image 1" />
        <img src="https://th.bing.com/th/id/OIP.ezCS-IM2IWffcP1hwX4fpwHaE8?w=274&h=183&c=7&r=0&o=5&pid=1.7" alt="Image 2" />
      </div>
      {/* <Videos />
      <GymYoga />
      <Profiles /> */}
      {/* <Routes>
        <Route path="/settings" element={<Settings />} />
        <Route path="/history" element={<History />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/my-classes" element={<MyClasses />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/logout" element={<Logout />} />
      </Routes> */}
    </div>
  );
};

export default MainContent;