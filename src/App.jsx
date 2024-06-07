import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginHome from './components/LoginModule/LoginHome';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Login from './components/LoginModule/Login';
import Registration from './components/LoginModule/registration';
import ForgotPassword from './components/LoginModule/forgotPassword';
import DashBoard from './components/HomeModule/HomePage';
import Settings from './components/AccountManangment/SettingSection';
import DemoVideo from './components/HomeModule/AddDemoVideos';

function App() {

  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<LoginHome />} />
    //       <Route path="/Login" element={<Login />} />
    //       <Route path="/signUp" element={<Registration />} />
    //       <Route path="/forgotPassword" element={<ForgotPassword />} />
    //       <Route path="/homePage" element={<DashBoard />} />
    //       <Route path="/settings" element={<Settings />} />
    //       {/* <Route path="/history" element={<History />} />
    //             <Route path="/enquiry" element={<Enquiry />} />
    //             <Route path="/my-classes" element={<MyClasses />} />
    //             <Route path="/faq" element={<FAQ />} />
    //             <Route path="/logout" element={<Logout />}/> */}
    //     </Routes>
    //   </div>
    // </Router>
    <div>
      <Router>
        <DemoVideo />
      </Router>
    </div>
  );
};
export default App;
