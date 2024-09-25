import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';
import '../commo/Signup.css';
import { signup } from '../services/apiServices';

export const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signup(formData);
            alert("signup successful");
            navigate('/login');
        } catch (error) {
            alert('Error during signup, please try again.');
        }
    };

    return (
        <div className='main'>      
            <h3>Signup form</h3>
            <form onSubmit={handlesubmit}>
                <div className="form-group">
                    <label htmlFor="firstname">Firstname</label><br />
                    <input type="text"
                     id="firstName" 
                    name="firstname" 
                    placeholder="your first name" 
                    value={formData.firstname} 
                    onChange={handleChange} /> 
                </div><br />

                <div className="form-group">
                    <label htmlFor="lastname">Lastname</label><br />
                    <input type="text" 
                    id="lastname" 
                    name="lastname" 
                    placeholder="your last name" 
                    value={formData.lastname} 
                    onChange={handleChange} required />
                </div><br />

                <div className="form-group">
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" name="email" placeholder="YOUR EMAIL" value={formData.email} onChange={handleChange} required />
                </div><br />

                <div className="form-group">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="password" name="password" placeholder="your password" value={formData.password} onChange={handleChange} required />
                </div><br />

                <button type="submit">Signup</button><br />

                <div className="login">
                    <p>Already have an account?</p>
                    <button type="button" onClick={() => navigate('/login')}>Login</button>
                </div>
            </form>
        </div>
    );
};