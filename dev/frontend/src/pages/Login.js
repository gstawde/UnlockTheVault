import './login.css';

import UnlockLogo from '../assets/unlockLogo.png';

const Login = () => {
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
                <input type="text" id="username" name="username" placeholder="Username"/>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" placeholder="Password"/>
                <input type="submit" value="Log In"/>
            </form>
        </body>
        </html>

    )
}
export default Login;