import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Settings.css';
const Settings = () => {

  const email = localStorage.getItem('email');
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/get_profile/${email}');
        const result= await response.json();
        setData(result);
      } catch (error) {
        console.error('error fetching', error);
      }
    };
    fetchData();
  }, [email]);
  return (
    <div>
      {data ? (<div>
        <h1>data Retrived:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre></div>
      ) : (<p>Loding...</p>
      )}</div>
  );
};
export default Settings;
