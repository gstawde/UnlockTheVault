import './sign-up.css';

import UnlockLogo from '../assets/unlockLogo.png';

const SignUp = () => {
    return (
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <link rel="icon" href={UnlockLogo} />
            <title>Unlock the Vault</title>
        </head>
        <body>
            <img className="logo" src={UnlockLogo} alt="Unlock the Vault Logo"/>
            <h1>Sign Up Below!</h1>
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="username" placeholder="First Name"/>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="fname" name="password" placeholder="Last Name"/>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Username"/>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" placeholder="Password"/>
                <input type="submit" value="Sign Up"/>
            </form>
        </body>
        </html>

    )
}
export default SignUp;