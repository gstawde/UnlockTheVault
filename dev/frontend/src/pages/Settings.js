import UnlockLogo from '../assets/unlockLogo.png';
import React from "react";
import './settings.css';

const HomePage = () => {
    return (
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <link rel="icon" href={UnlockLogo} />
            <title>Unlock the Vault</title>
        </head>
        <body>
            <div className="navbar">
                <a href="/">Logout</a>
                <a className="active" href="/settings">Settings</a>
                <a href="/game">Play!</a>
                <a href="/user-dashboard">Dashboard</a>
                <img className="split" src={UnlockLogo} alt="Unlock the Vault Logo"/>
            </div>

            <h1 className="setting-page-header">Account Information</h1>

            <div className="row">
                <div className="column information-type">
                    <p>Name</p>
                </div>
                <div className="column user-information">
                    <p>Full Name</p>
                </div>
            </div>

            <div className="row">
                <div className="column information-type">
                    <p>Username</p>
                </div>
                <div className="column user-information">
                    <p>user.name</p>
                </div>
            </div>

            <div className="row">
                <div className="column information-type">
                    <p>Email</p>
                </div>
                <div className="column user-information">
                    <p>email@email.com</p>
                </div>
            </div>
        </body>
        </html>

    )
}
export default HomePage;