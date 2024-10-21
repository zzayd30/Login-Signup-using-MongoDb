import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const LogIn = () => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/LogIn', { email, password })
            .then(result => {
                console.log(result)
                if (result.data.type === "success" && result.data.admin === true) {
                    navigate('/Home_Admin')
                }
                else if (result.data.type === "success" && result.data.admin === false) {
                    navigate('/Home_User')
                }
                else {
                    alert(result.data.message)
                }
            })
            .catch(err => console.log(err))

    };

    return (
        <div className="login_container">
            <div className='Login'>
                <form onSubmit={handleSubmit} className='Container'>
                    <h1><center>Login</center></h1>
                    <div className="input-container">
                        {/* <div className="icon"><FaUser /></div> */}
                        <input
                            className='input-field'
                            type="email"
                            id="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-container">
                        {/* <div className="icon"><FaLock /></div> */}
                        <input
                            className='input-field'
                            type="password"
                            id="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                    <p>Don't have an account? <NavLink to="/" className="register-link">Register</NavLink></p>
                </form>
            </div>
        </div>
    )
}
export default LogIn