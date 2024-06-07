import React, { useState, useEffect } from "react";
import axios from 'axios';
import './TutorDemoVideos.css'

const TutorProfileList = () => {
    const [tutor, setTutors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/get_Tutors')
            .then(response => {
                setTutors(response.data);
            })
            .catch(error => {
                alert(error);
                console.error("There was an error fetching the data", error);

            });
    }, []);



    return (
        <div className="video_payer">
            {tutor.map((item, index) => (
                <div key={index} className="video_payer_box">
                    <h3>Name : {item.name}</h3>
                    <p>Email :{item.email}</p>
                    <p>Mobile : {item.mobile}</p>
                </div>
            ))}
        </div>
    );
};

export default TutorProfileList;