import './user-dashboard.css';

import UnlockLogo from '../assets/unlockLogo.png';

const UserDashboard = () => {
    return (
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <link rel="icon" href={UnlockLogo} />
            <title>Unlock the Vault</title>
        </head>
        <body>
            <div className="navbar">
                <a>Logout</a>
                <a href="/settings">Settings</a>
                <a href="/game">Play!</a>
                <a className="active" href="/user-dashboard">Dashboard</a>
                <img className="split" src={UnlockLogo} alt="Unlock the Vault Logo"/>
            </div>
            <h1>Username's Game History</h1>
            <div className="game-history">
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Win/Loss</th>
                        <th>Number of Hints Used</th>
                    </tr>
                    <tr>
                        <td>03/14/2024</td>
                        <td>Win</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>03/14/2024</td>
                        <td>Win</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>03/12/2024</td>
                        <td>Loss</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>03/09/2024</td>
                        <td>Loss</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>03/03/2024</td>
                        <td>Win</td>
                        <td>0</td>
                    </tr>
                </table>
            </div>
        </body>
        </html>

    )
}
export default UserDashboard;