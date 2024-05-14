import './login.css';
import httpClient from '../httpClient.ts';
import React, { useState, useEffect } from 'react';
import UnlockLogo from '../assets/unlockLogo.png';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userID, setUserID] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = (e) => {
        e.preventDefault(); // Prevent the default form submission
        setShowPassword(!showPassword);
    };

    // Notifies user of what's wrong with their form input
    const notify = (warning) => toast.error(warning);

    // const test = async () => {
    //     try {
    //         const resp = await httpClient.get("http://127.0.0.1:5000/@me");
    //         console.log(resp);
    //         // window.location.href = "/user-dashboard";
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const handleLogin = async () => {
        if (username.trim() === '' || password.trim() === '') {
            notify('You missed a spot! Make sure to provide both a username AND password.');
        } else {
            try {
                const resp = await httpClient.post("http://127.0.0.1:5000/login", {
                    username,
                    password,
                });
                window.location.href = "/user-dashboard";
                console.log("Correct credentials!");
                // await test();
            } catch (e) {
                if (e.response.status === 401) {
                    notify('Invalid credentials. Try again.')
                }
            }
        }
    };

    return (
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <link rel="icon" href={UnlockLogo} />
            <title>Unlock the Vault</title>
        </head>
        <body>
            <h1>Welcome Back!</h1>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <div className="show-pass-row">
                    <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="show-pass-button" onClick={handleTogglePassword}>{showPassword ? 'Hide Password' : 'Show Password'}</button>
                </div>
                <button type="button" className="login" onClick={handleLogin}>Login</button>
                <ToastContainer
                    position="top-center"
                    transition={Slide}
                />
            </form>
        </body>
        </html>

    )
}
export default Login;