import './login.css';
import React, { useState } from 'react';
import UnlockLogo from '../assets/unlockLogo.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = (e) => {
        e.preventDefault(); // Prevent the default form submission
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        if (username.trim() === '' || password.trim() === '') {
            alert('You missed a spot! Make sure to provide both a username AND password.');
        } else {
            // Perform login logic here
            console.log('Logging in...');
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
            <img className="logo" src={UnlockLogo} alt="Unlock the Vault Logo"/>
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
            </form>
        </body>
        </html>

    )
}
export default Login;