import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/settings">Settings</Link>
      <Link to="/history">History</Link>
      <Link to="/enquiry">Enquiry</Link>
      <Link to="/my-classes">My Classes</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
};
export default Sidebar;