const playerOneLetter = document.getElementById('playerOneLetter');
const playerOneName = document.getElementById('playerOneName');
const playerTwoLetter = document.getElementById('playerTwoLetter');
const playerTwoName = document.getElementById('playerTwoName');
const playerInfo = document.getElementById('playerInfo');
const computerInfo = document.getElementById('computerInfo');
const userMain = document.getElementById('userMain');
const backToMain = document.getElementById('backToMain');
const backtoMain2 = document.getElementById('backToMain2');
const playerVPlayer = document.getElementById('playerVPlayer');
const playerVComputer = document.getElementById('playerVComputer');
const playerVersusComputerName = document.getElementById('playerVersusComputerName');
const playerVersusComputerLetter = document.getElementById('playerVersusComputerLetter');
const submitButton = document.getElementById('submitButton');
const submitButton2 = document.getElementById('submitButton2');
const boardDisplay = document.getElementById('boardDisplay');
const difficulty = document.getElementById('difficulty');

const gameBoard = (() => {
    const blockZero = '0';
    const blockOne = '1';
    const blockTwo = '2';
    const blockThree = '3';
    const blockFour = '4';
    const blockFive = '5';
    const blockSix = '6';
    const blockSeven = '7';
    const blockEight = '8';
    const boardArray = [blockZero, blockOne, blockTwo, blockThree, blockFour, blockFive,
          blockSix, blockSeven, blockEight];
    return { boardArray };
})();

//player factory function
const PVP = (playerOne, playerOneChoice, playerTwo, playerTwoChoice) => {
    if (playerOne === "" || playerTwo === "") {
        playerOne = 'Earthborn One';
        playerTwo = 'Earthborn Two';
    }
    if (playerOneChoice === 'o') {
        playerTwoChoice = 'x';
    } else if (playerOneChoice === 'x') {
        playerTwoChoice = 'o';
    };
    return { playerOne, playerOneChoice, playerTwo, playerTwoChoice };
};

const PVC = (playerVCompName, playerVCompLetter, computerLetter, difficultyChoice) => {
    if (playerVCompName === "") {
        playerVCompName = 'Earthborn One';
    }
    if (playerVCompLetter === 'o') {
        computerLetter = 'x';
    } else if (playerVCompLetter === 'x') {
        computerLetter = 'o';
    };
    return { playerVCompName, playerVCompLetter, computerLetter, difficultyChoice };
};

//object to control the flow of the game
const gamePlay = (() => {


})();

function removeMain() {
    userMain.remove();
    playerInfo.remove();
    computerInfo.remove();
    boardDisplay.style.transitionDuration = "1s";
    boardDisplay.style.width = "100%";
    boardDisplay.style.height = "100%";
}

submitButton.addEventListener('click', () => {
    let playerOne = playerOneName.value;
    let playerOneChoice = playerOneLetter.value;
    let playerTwo = playerTwoName.value;
    let playerTwoChoice = "";
    if(playerOneLetter.value === "select"){
        alert("You must choose a letter to play");
        return;
    }
    const player = PVP(playerOne, playerOneChoice, playerTwo, playerTwoChoice);
    removeMain();
    console.log(player);
});

submitButton2.addEventListener('click', () => {
    let playerVCompName = playerVersusComputerName.value;
    let playerVCompLetter = playerVersusComputerLetter.value;
    let difficultyChoice = difficulty.value;
    let computerLetter = "";
    const playerVersusComputer = PVC(playerVCompName, playerVCompLetter, computerLetter, difficultyChoice)
    removeMain();
    console.log(playerVersusComputer);
});

playerVPlayer.addEventListener('click', () => {
    userMain.style.display = "none";
    playerInfo.style.display = "block";
});

playerVComputer.addEventListener('click', () => {
    userMain.style.display = "none";
    computerInfo.style.display = "block";
});

backToMain.addEventListener('click', () => {
    userMain.style.display = "block";
    playerInfo.style.display = "none";
});

backToMain2.addEventListener('click', () => {
    userMain.style.display = "block";
    computerInfo.style.display = "none";
});

