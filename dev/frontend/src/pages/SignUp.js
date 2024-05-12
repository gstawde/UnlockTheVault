import './sign-up.css';
import UnlockLogo from '../assets/unlockLogo.png';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import httpClient from "../httpClient.ts";


const SignUp = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [fName, setFirstName] = useState('');
    const [lName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

    const handleTogglePassword = (e) => {
        e.preventDefault(); // Prevent the default form submission
        setShowPassword(!showPassword);
    };

    const handleTogglePasswordRepeat = (e) => {
        e.preventDefault(); // Prevent the default form submission
        setShowPasswordRepeat(!showPasswordRepeat);
    };

    const passwordsMatch = () => {
        return password === passwordRepeat;
    };

    const validPasswordLengthCheck = () => {
        return password.length >= 10;

    };

    const validateNewAccountInfo = async () => {
        if (!passwordsMatch()) {
            return "The provided passwords do not match.";
        }
        if (validPasswordLengthCheck()) {
            try {
                const resp = await httpClient.post("http://127.0.0.1:5000/register", {
                    "username": username,
                    "first_name": fName,
                    "last_name": lName,
                    "email": email,
                    "password": password,
                });
                window.location.href = "/login";
                // notify("success");
            } catch (e) {
                if (e.response && e.response.status === 409) {
                    notify('This user already exists.');
                } else {
                    console.error('Unexpected error:', e);
                }
            }
        } else {
            notify('This is not a valid password option. Make sure it is at least 10 characters.');
        }
    };

    // Notifies user of what's wrong with their form input
    const notify = (warning) => toast.error(warning);

    const handleSignUp = () => {
        if (username.trim() === '' || password.trim() === '' || fName.trim() === '' || lName.trim() === '') {
            notify('You missed a spot! Make sure none of the form fields are empty.');
        } else {
            // Validate new user input
            let validatedInfo = validateNewAccountInfo();
            // display provided user info
            if (validatedInfo != null) {
                notify(validatedInfo);
            }
            // alert('The user info you provided includes the following:\n' +
            //     'First Name: ' + fName +'\nLast Name: ' + lName + '\n' +
            //     'Username: ' + username + '\nPassword: ' + password + '\nHashed Password: ' +
            //     hashedPassword);

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
            <h1>Sign Up Below!</h1>
            <form>
                <label htmlFor="fName">First Name</label>
                <input type="text" id="fName" name="firstName" placeholder="First Name" value={fName} onChange={(e) => setFirstName(e.target.value)}/>
                <label htmlFor="lName">Last Name</label>
                <input type="text" id="lnName" name="lastName" placeholder="Last Name" value={lName} onChange={(e) => setLastName(e.target.value)}/>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <div className="show-pass-row">
                    <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="show-pass-button" onClick={handleTogglePassword}>{showPassword ? 'Hide Password' : 'Show Password'}</button>
                </div>

                <label htmlFor="password">Enter your password again</label>
                <div className="show-pass-row">
                    <input type={showPasswordRepeat ? 'text' : 'password'} id="password-repeat" name="passwordRepeat" placeholder="Password" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)}/>
                    <button className="show-pass-button" onClick={handleTogglePasswordRepeat}>{showPasswordRepeat ? 'Hide Password' : 'Show Password'}</button>
                </div>

                <button type="button" className="sign-up" onClick={handleSignUp}>Sign Up</button>
                <ToastContainer
                    position="top-center"
                    transition={Slide}
                />
            </form>
        </body>
        </html>

    )
}
export default SignUp;