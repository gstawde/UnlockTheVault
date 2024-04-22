let testArr = Array(6).fill(null);
export const generateRandomNumbers = () => {
    testArr = Array.from({ length: 6 }, () => Math.floor(Math.random() * 30) + 1);
    return  testArr;
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

const updateTestContent = (newContent, setTestContent) => {
    setTestContent(newContent);
};

export const handleButtonClick = (boxId, inputValue, backgroundColor, setBackgroundColor) => {
    if (boxId === 'one') {
        if (testArr[0] === parseInt(inputValue, 10)) {
            setBackgroundColor('#309B35'); // Green hex code
        } else {
            setBackgroundColor('#C72721'); // Red hex code
        }
        // else {
        //     setBackgroundColor('#C72721'); // Red hex code
        //     if (testArr[0] > parseInt(inputValue, 10)) {
        //         updateTestContent('Too small!', setTestContent);
        //     } else {
        //         updateTestContent('Too big!', setTestContent);
        //     }
        // }
    } else if (boxId === 'two') {
        if (testArr[1] === parseInt(inputValue, 10)) {
            setBackgroundColor('#309B35'); // Red hex code
        } else {
            setBackgroundColor('#C72721'); // Red hex code
        }
    } else if (boxId === 'three') {
        if (testArr[2] === parseInt(inputValue, 10)) {
            setBackgroundColor('#309B35'); // Red hex code
        } else {
            setBackgroundColor('#C72721'); // Red hex code
        }
    } else if (boxId === 'four') {
        if (testArr[3] === parseInt(inputValue, 10)) {
            setBackgroundColor('#309B35'); // Red hex code
        } else {
            setBackgroundColor('#C72721'); // Red hex code
        }
    } else if (boxId === 'five') {
        if (testArr[4] === parseInt(inputValue, 10)) {
            setBackgroundColor('#309B35'); // Red hex code
        } else {
            setBackgroundColor('#C72721'); // Red hex code
        }
    } else if (boxId === 'six') {
        if (testArr[5] === parseInt(inputValue, 10)) {
            setBackgroundColor('#309B35'); // Red hex code
        } else {
            setBackgroundColor('#C72721'); // Red hex code
        }
    }
};

export const handleHintButton = (boxId, inputValue, setHint) => {
    if (boxId === 'one') {
        if (testArr[0] > parseInt(inputValue, 10)) {
            updateTestContent('Too small!', setHint);
        } else if (testArr[0] < parseInt(inputValue, 10)) {
            updateTestContent('Too big!', setHint);
        } else {
            console.log("Correct answer!");
        }
    }
};
