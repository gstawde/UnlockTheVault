import './game-page.css';
import UnlockLogo from '../assets/unlockLogo.png';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import * as GameLogic from './GameLogic';

const GamePage = () => {

    // Generating the random number key to the vault
    const [randomNum, setRandomNum] = useState([]);
    useEffect(() => {
        const newRandomNum = GameLogic.generateRandomNumbers(17);
        setRandomNum(newRandomNum);
    }, []); // Run once on component mount

    // Evaluating User Input
    const [inputValueOne, setInputValueOne] = useState('');
    const [inputValueTwo, setInputValueTwo] = useState('');
    const [inputValueThree, setInputValueThree] = useState('');
    const [inputValueFour, setInputValueFour] = useState('');
    const [inputValueFive, setInputValueFive] = useState('');
    const [inputValueSix, setInputValueSix] = useState('');

    const [backgroundColorOne, setBackgroundColorOne] = useState('#FFFFFF');
    const [backgroundColorTwo, setBackgroundColorTwo] = useState('#FFFFFF');
    const [backgroundColorThree, setBackgroundColorThree] = useState('#FFFFFF');
    const [backgroundColorFour, setBackgroundColorFour] = useState('#FFFFFF');
    const [backgroundColorFive, setBackgroundColorFive] = useState('#FFFFFF');
    const [backgroundColorSix, setBackgroundColorSix] = useState('#FFFFFF');

    const [hintOne, setHintOne] = useState('');
    const [hintTwo, setHintTwo] = useState('');
    const [hintThree, setHintThree] = useState('');
    const [hintFour, setHintFour] = useState('');
    const [hintFive, setHintFive] = useState('');
    const [hintSix, setHintSix] = useState('');
    const [hintsLeft, setHintsLeft] = useState(5);

    const notify = (warning) => toast.warning(warning);
    const notifyError = (warning) => toast.error(warning);

    const handleSubmitClick = () => {
        let numCorrect = 0;
        if (isCompletelyEmpty()) {
            notifyError("You didn't provide any guesses. Try putting in at least one number in a spot before submitting!")
        } else {
            if (GameLogic.checkSubmittedGuess('one', inputValueOne, backgroundColorOne, setBackgroundColorOne, setHintOne)) numCorrect++;
            if (GameLogic.checkSubmittedGuess('two', inputValueTwo, backgroundColorTwo, setBackgroundColorTwo, setHintTwo)) numCorrect++;
            if (GameLogic.checkSubmittedGuess('three', inputValueThree, backgroundColorThree, setBackgroundColorThree, setHintThree)) numCorrect++;
            if (GameLogic.checkSubmittedGuess('four', inputValueFour, backgroundColorFour, setBackgroundColorFour, setHintFour)) numCorrect++;
            if (GameLogic.checkSubmittedGuess('five', inputValueFive, backgroundColorFive, setBackgroundColorFive, setHintFive)) numCorrect++;
            if (GameLogic.checkSubmittedGuess('six', inputValueSix, backgroundColorSix, setBackgroundColorSix, setHintSix)) numCorrect++;
        }
        if (numCorrect === 6) {
            alert("You win!!");
        }
    };

    const isCompletelyEmpty = () => {
        return (inputValueOne === "" && inputValueTwo === "" && inputValueThree === "" && inputValueFour === "" && inputValueFive === "" && inputValueSix === "");
    };


    const [areHintsDisabled, setHintsDisabled] = useState(false);

    const handleHintClick = () => {
        if (hintsLeft > 0) {
            if (isCompletelyEmpty()) {
                notifyError("Uh oh! You can't request a hint when you haven't filled in any of the spaces. Try putting in at least one number in a spot first.")
            } else {
                setHintsLeft(hintsLeft - 1);
                GameLogic.handleHintButton(inputValueOne, setHintOne, 1);
                GameLogic.handleHintButton(inputValueTwo, setHintTwo, 2);
                GameLogic.handleHintButton(inputValueThree, setHintThree, 3);
                GameLogic.handleHintButton(inputValueFour, setHintFour, 4);
                GameLogic.handleHintButton(inputValueFive, setHintFive, 5);
                GameLogic.handleHintButton(inputValueSix, setHintSix, 6);
            }
        } else {
            notify("Oh no, you've run out of hints! However, you can now request a solution by clicking 'Solve'!"); // Alert when no hints left
            setHintsDisabled(true);
        }
    };

    const provideSolution = () => {
        alert('The correct solution was: ' + randomNum);
    };

    const gameRules = () => {
        alert('How to Play!\n- The game generates 6 random and unique numbers between 1 and 17.\n-Click Submit to get your guesses evaluated.\n' +
            '- Correct answers will make the box green; incorrect will make them red.\n- You get up to 5 hints per game, and unlimited submissions.\n' +
            '- Hints will indicate if your incorrect guess is too high or low compared to the correct number.\n- Only after you\'ve used up all your guesses will you be able to see the solution to the puzzle.\nGOOD LUCK! :)');
    }

    return (
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <link rel="icon" href={UnlockLogo} />
            <title>Unlock the Vault</title>
        </head>
        <body>
            <a href="/">
                <button className="landing-page">Home</button>
            </a>
            <h1>Guess the numbers, Unlock the Vault!<button class="game-rules" onClick={gameRules}>Rules</button></h1>
            <div class="row">
                <div class="column">
                    <input type="text" id="one" value={inputValueOne} onChange={(event) => GameLogic.handleInputChangeOne(event, setInputValueOne)} style={{ backgroundColor: backgroundColorOne }} />
                    <p>{hintOne}</p>
                </div>
                <div className="column">
                    <input type="text" id="two" value={inputValueTwo} onChange={(event) => GameLogic.handleInputChangeTwo(event, setInputValueTwo)} style={{ backgroundColor: backgroundColorTwo }} />
                    <p>{hintTwo}</p>
                </div>
                <div className="column">
                    <input type="text" id="three" value={inputValueThree} onChange={(event) => GameLogic.handleInputChangeThree(event, setInputValueThree)} style={{ backgroundColor: backgroundColorThree }} />
                    <p>{hintThree}</p>
                </div>
                <div className="column">
                    <input type="text" id="four" value={inputValueFour} onChange={(event) => GameLogic.handleInputChangeFour(event, setInputValueFour)} style={{ backgroundColor: backgroundColorFour }} />
                    <p>{hintFour}</p>
                </div>
                <div className="column">
                    <input type="text" id="five" value={inputValueFive} onChange={(event) => GameLogic.handleInputChangeFive(event, setInputValueFive)} style={{ backgroundColor: backgroundColorFive }} />
                    <p>{hintFive}</p>
                </div>
                <div className="column">
                    <input type="text" id="six" value={inputValueSix} onChange={(event) => GameLogic.handleInputChangeSix(event, setInputValueSix)} style={{ backgroundColor: backgroundColorSix }} />
                    <p>{hintSix}</p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <button class="hints" onClick={handleHintClick} disabled={areHintsDisabled}>HINTS</button>
                    <ToastContainer
                        transition={Slide}
                    />
                    <p>Hint(s) left: {hintsLeft}</p>
                </div>
                <div className="column">
                    <button class="submit" onClick={handleSubmitClick}>SUBMIT</button>
                </div>
                <div className="column">
                    <button class="solution" onClick={provideSolution} disabled={hintsLeft > 0}>SOLVE!</button>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="column">
                    <h2>Want to save this game and future ones?</h2>
                    <a href="/signup">
                        <button className="sign-up-button">Sign Up</button>
                    </a>
                </div>
                <div className="column">
                    <h2>Want to save this game and already have an account?</h2>
                    <a href="/login">
                        <button className="login-button">Log In</button>
                    </a>
                </div>
            </div>
        </body>
        </html>

    )
}
export default GamePage;