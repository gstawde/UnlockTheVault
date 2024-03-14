import './landing-page.css';
import UnlockLogo from '../assets/unlockLogo.png';
import UnlockFullLogo from '../assets/unlockFullLogo.png';

const LandingPage = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <link rel="icon" href={UnlockLogo} />
                <title>Unlock the Vault</title>
            </head>
            <body>
                <div className="landing-view1">
                    <a href="/login">
                        <button className="landing-view1-login">Login</button>
                    </a>
                    <img className="landing-view1-img" src={UnlockFullLogo} alt="Unlock the Vault Full Logo" />
                </div>
                <div className="landing-view2">
                    <p className="landing-view2-header">Guess each part of the key...<br/>Crack the code...<br/>Win!</p>
                    <img className="landing-view2-logo" src={UnlockLogo} alt="Unlock the Vault Logo"/>
                </div>
                <div className="landing-view3">
                    <p className="landing-view3-header">Sign Up to track your progress or just get to playing!</p>
                    <div className="row">
                        <div className="column">
                            <a href="/signup">
                                <button className="landing-view3-signup">Sign Up</button>
                            </a>
                        </div>
                        <div className="column">
                            <a href="/play">
                                <button className="landing-view3-play">Play!</button>
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        </html>

    )
}
export default LandingPage;