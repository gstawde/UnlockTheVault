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

    const [testContent, setTestContent] = useState('');

    const handleSubmitClick = () => {
        GameLogic.handleButtonClick('one', inputValueOne, backgroundColorOne, setBackgroundColorOne);
        GameLogic.handleButtonClick('two', inputValueTwo, backgroundColorTwo, setBackgroundColorTwo);
        GameLogic.handleButtonClick('three', inputValueThree, backgroundColorThree, setBackgroundColorThree);
        GameLogic.handleButtonClick('four', inputValueFour, backgroundColorFour, setBackgroundColorFour);
        GameLogic.handleButtonClick('five', inputValueFive, backgroundColorFive, setBackgroundColorFive);
        GameLogic.handleButtonClick('six', inputValueSix, backgroundColorSix, setBackgroundColorSix);
    };

    const handleHintClick = () => {
        GameLogic.handleHintButton('one', inputValueOne, setTestContent);
    };

    return (
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <link rel="icon" href={UnlockLogo} />
            <title>Unlock the Vault</title>
        </head>
        <body>
            <h2>Random Numbers</h2>
            <ul>
                {randomNum.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>

            <input type="text" id="one" value={inputValueOne} onChange={(event) => GameLogic.handleInputChangeOne(event, setInputValueOne)} style={{ backgroundColor: backgroundColorOne }} />
            <p>{testContent}</p>
            <button onClick={handleHintClick}>HINTS</button>
            <input type="text" id="two" value={inputValueTwo} onChange={(event) => GameLogic.handleInputChangeTwo(event, setInputValueTwo)} style={{ backgroundColor: backgroundColorTwo }} />
            {/*<p>{testContent}</p>*/}
            <input type="text" id="three" value={inputValueThree} onChange={(event) => GameLogic.handleInputChangeThree(event, setInputValueThree)} style={{ backgroundColor: backgroundColorThree }} />
            <input type="text" id="four" value={inputValueFour} onChange={(event) => GameLogic.handleInputChangeFour(event, setInputValueFour)} style={{ backgroundColor: backgroundColorFour }} />
            <input type="text" id="five" value={inputValueFive} onChange={(event) => GameLogic.handleInputChangeFive(event, setInputValueFive)} style={{ backgroundColor: backgroundColorFive }} />
            <input type="text" id="six" value={inputValueSix} onChange={(event) => GameLogic.handleInputChangeSix(event, setInputValueSix)} style={{ backgroundColor: backgroundColorSix }} />
            <button onClick={handleSubmitClick}>Submit</button>

        </body>
        </html>

    )
}
export default GamePage;