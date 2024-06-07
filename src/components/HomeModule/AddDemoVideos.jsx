import React, { useState } from 'react';
import axios from "axios";
import './AddDemoVideos.css';
import { useNavigate } from 'react-router-dom';
const DemoVideo = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        skills: '',
        video: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, video: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();
        formDataObj.append('title', formData.title);
        formDataObj.append('description', formData.description);
        formDataObj.append('skills', formData.skills);
        formDataObj.append('video', formData.video);
        formDataObj.append('email', 'mallikarjuna892@gmail.com')

        try {
            const response = await axios.post('http://localhost:8080/video/Upload', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('User data submitted:', response.data);
          if(response.status===200){
            alert("success")
            navigate('/homepage')
          }
        } catch (error) {
            console.error('Error submitting user data:', error);
            alert("invalid input")
        }
    };

    return (
        <form className="user-data-form" onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </label>
            <label>
                Description:
                <textarea name="description" value={formData.description} onChange={handleChange} required />
            </label>

            <label>
                Skills:
                <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
            </label>
            <label>
                Video:
                <input type="file" name="video" accept="video/*" onChange={handleFileChange} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};
export default DemoVideo;