import React, { useState, useEffect } from "react";
import axios from 'axios';
import './TutorDemoVideos.css';

const TutorDemoVideos = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/video/getAlldemo')
            .then(response => {
                setVideos(response.data);
            })
            .catch(error => {
                alert(error);
                console.error("There was an error fetching the data", error);

            });
    }, []);

    return (
        <div className="video_payer">
            {videos.map((item, index) => (
                <div key={index} className="video_payer_box">
                    <h2>Title : {item.title}</h2>
                    <p>{item.email}</p>
                    <video controls>
                        <source src={item.videoPath} type="video/mp4" />
                    </video>
                    <p>Skills : {item.skills}</p>  
                    <p>Description : {item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default TutorDemoVideos;

