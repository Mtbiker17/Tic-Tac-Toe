const playerLetter = document.getElementById('playerLetter');
const playerName = document.getElementById('playerName');
const userInfoSubmit = document.getElementById('submitButton');

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
const Player = (userName, userLetter, computerLetter) => {
    const getPlayerName = () => userName
    const getPlayerLetter = () => userLetter
    return { userName, userLetter, computerLetter };
};

//object to control the flow of the game
const gamePlay = (() => {
    const play = () => {
        //make a moves here
    }

})();

userInfoSubmit.addEventListener('click', () => {
    let userNameInput = playerName.value;
    let userLetterInput = playerLetter.value;
    let computerLetter = '';
    if (userNameInput === "") {
        userNameInput = 'Earthborn';
    }
    if (userLetterInput === 'o') {
        computerLetter = 'x';
    } else if (userLetterInput === 'x') {
        computerLetter = 'o';
    }
    const player = Player(userNameInput, userLetterInput, computerLetter);
    console.log(player);
});

