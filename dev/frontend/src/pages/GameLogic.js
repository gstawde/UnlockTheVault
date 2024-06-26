let testArr = Array(6).fill(null);
export const generateRandomNumbers = (max) => {
    let numbersSet = new Set();

    while (numbersSet.size < 6) {
        let randomNumber = Math.floor(Math.random() * max) + 1;
        numbersSet.add(randomNumber);
    }

    testArr = Array.from(numbersSet);
    return testArr;
};

export const handleInputChangeOne = (event, setInputValueOne) => {
    setInputValueOne(event.target.value);
};
export const handleInputChangeTwo = (event, setInputValueTwo) => {
    setInputValueTwo(event.target.value);
};
export const handleInputChangeThree = (event, setInputValueThree) => {
    setInputValueThree(event.target.value);
};
export const handleInputChangeFour = (event, setInputValueFour) => {
    setInputValueFour(event.target.value);
};
export const handleInputChangeFive = (event, setInputValueFive) => {
    setInputValueFive(event.target.value);
};
export const handleInputChangeSix = (event, setInputValueSix) => {
    setInputValueSix(event.target.value);
};

const updateTestContent = (newContent, setHint) => {
    setHint(newContent);
};

export const checkSubmittedGuess = (boxId, inputValue, backgroundColor, setBackgroundColor, setHint) => {
    let ansCorrect = false;
    if (boxId === 'one') {
        if (testArr[0] === parseInt(inputValue, 10)) {
            setBackgroundColor('#309B35'); // Green hex code
            updateTestContent('', setHint);
            ansCorrect = true;
        } else {
            setBackgroundColor('#C72721'); // Red hex code
            updateTestContent('', setHint);
        }
    } else if (boxId === 'two') {
        if (testArr[1] === parseInt(inputValue, 10)) {
            setBackgroundColor('#309B35');
            updateTestContent('', setHint);
            ansCorrect = true;
        } else {
            setBackgroundColor('#C72721');
            updateTestContent('', setHint);
        }
    } else if (boxId === 'three') {
        if (testArr[2] === parseInt(inputValue, 10)) {
            setBackgroundColor('#309B35');
            updateTestContent('', setHint);
            ansCorrect = true;
        } else {
            setBackgroundColor('#C72721'); // Red hex code
            updateTestContent('', setHint);
        }
    } else if (boxId === 'four') {
        if (testArr[3] === parseInt(inputValue, 10)) {
            setBackgroundColor('#309B35');
            updateTestContent('', setHint);
            ansCorrect = true;
        } else {
            setBackgroundColor('#C72721'); // Red hex code
            updateTestContent('', setHint);
        }
    } else if (boxId === 'five') {
        if (testArr[4] === parseInt(inputValue, 10)) {
            setBackgroundColor('#309B35');
            updateTestContent('', setHint);
            ansCorrect = true;
        } else {
            setBackgroundColor('#C72721'); // Red hex code
            updateTestContent('', setHint);
        }
    } else if (boxId === 'six') {
        if (testArr[5] === parseInt(inputValue, 10)) {
            setBackgroundColor('#309B35');
            updateTestContent('', setHint);
            ansCorrect = true;
        } else {
            setBackgroundColor('#C72721'); // Red hex code
            updateTestContent('', setHint);
        }
    }
    return ansCorrect;
};

export const handleHintButton = (inputValue, setHint, spotNumber) => {
    if (testArr[spotNumber - 1] > parseInt(inputValue, 10)) {
        updateTestContent('Too small!', setHint);
    } else if (testArr[spotNumber - 1] < parseInt(inputValue, 10)) {
        updateTestContent('Too big!', setHint);
    } else {
        updateTestContent('', setHint);
    }
};
