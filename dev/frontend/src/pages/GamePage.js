import './game-page.css';
import UnlockLogo from '../assets/unlockLogo.png';
import React, { useState, useEffect } from 'react';
import * as GameLogic from './GameLogic';

const GamePage = () => {

    // Generating the random number key to the vault
    const [randomNum, setRandomNum] = useState([]);
    useEffect(() => {
        const newRandomNum = GameLogic.generateRandomNumbers();
        setRandomNum(newRandomNum);
    }, []); // Run once on component mount

    // Evaluating User Input
    const [inputValueOne, setInputValueOne] = useState('');
    const [inputValueTwo, setInputValueTwo] = useState('');
    const [inputValueThree, setInputValueThree] = useState('');
    const [inputValueFour, setInputValueFour] = useState('');
    const [inputValueFive, setInputValueFive] = useState('');
    const [inputValueSix, setInputValueSix] = useState('');

    const [backgroundColorOne, setBackgroundColorOne] = useState('#FFFFFF'); // Default white color for box one
    const [backgroundColorTwo, setBackgroundColorTwo] = useState('#FFFFFF'); // Default white color for box two
    const [backgroundColorThree, setBackgroundColorThree] = useState('#FFFFFF'); // Default white color for box two
    const [backgroundColorFour, setBackgroundColorFour] = useState('#FFFFFF'); // Default white color for box two
    const [backgroundColorFive, setBackgroundColorFive] = useState('#FFFFFF'); // Default white color for box two
    const [backgroundColorSix, setBackgroundColorSix] = useState('#FFFFFF'); // Default white color for box two

    const [hintOne, setHintOne] = useState('');
    const [hintTwo, setHintTwo] = useState('');
    const [hintThree, setHintThree] = useState('');
    const [hintFour, setHintFour] = useState('');
    const [hintFive, setHintFive] = useState('');
    const [hintSix, setHintSix] = useState('');
    const [hintsLeft, setHintsLeft] = useState(5);

    const handleSubmitClick = () => {
        GameLogic.handleButtonClick('one', inputValueOne, backgroundColorOne, setBackgroundColorOne, setHintOne);
        GameLogic.handleButtonClick('two', inputValueTwo, backgroundColorTwo, setBackgroundColorTwo, setHintTwo);
        GameLogic.handleButtonClick('three', inputValueThree, backgroundColorThree, setBackgroundColorThree, setHintThree);
        GameLogic.handleButtonClick('four', inputValueFour, backgroundColorFour, setBackgroundColorFour, setHintFour);
        GameLogic.handleButtonClick('five', inputValueFive, backgroundColorFive, setBackgroundColorFive, setHintFive);
        GameLogic.handleButtonClick('six', inputValueSix, backgroundColorSix, setBackgroundColorSix, setHintSix);
    };

    const handleHintClick = () => {
        if (hintsLeft > 0) {
            setHintsLeft(hintsLeft - 1);
            GameLogic.handleHintButton(inputValueOne, setHintOne, 1);
            GameLogic.handleHintButton(inputValueTwo, setHintTwo, 2);
            GameLogic.handleHintButton(inputValueThree, setHintThree, 3);
            GameLogic.handleHintButton(inputValueFour, setHintFour, 4);
            GameLogic.handleHintButton(inputValueFive, setHintFive, 5);
            GameLogic.handleHintButton(inputValueSix, setHintSix, 6);
        } else {
            alert('Sorry! You have no more hints left :(\nBut you can now request a solution to the puzzle!'); // Alert when no hints left
        }
    };

    const provideSolution = () => {
        alert('The correct solution was: ' + randomNum);
    };

    const gameRules = () => {
        alert('How to Play!\n- Guess a number between 1 and 20 for each of the boxes below.\n-Click Submit to get your guesses evaluated.\n' +
            '- Correct answers will make the box green; incorrect will make them red.\n- You get up to 5 hints per game, and unlimited submissions.\n' +
            '- Only after you\'ve used up all your guesses will you be able to see the solution to the puzzle.\nGOOD LUCK! :)');
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
                <button className="landing-page">Back to the Landing Page</button>
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
                    <button class="hints" onClick={handleHintClick}>HINTS</button>
                    <p>Hint(s) left: {hintsLeft}</p>
                </div>
                <div className="column">
                    <button class="submit" onClick={handleSubmitClick}>SUBMIT</button>
                </div>
                <div className="column">
                    <button class="solution" onClick={provideSolution} disabled={hintsLeft > 0}>SOLUTION</button>
                </div>
            </div>
        </body>
        </html>

    )
}
export default GamePage;