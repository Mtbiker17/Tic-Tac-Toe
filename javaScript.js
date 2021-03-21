const playerLetter = document.getElementById('playerLetter');
const playername = document.getElementById('playerName');
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

const getPlayerName = (() => {
    playerName.value = userName;
    return { userName };
});

const getPlayerLetter = (() => {
    playerLetter.value = userLetter;
    return { userLetter };
});

//player objects (factory function)
const Player = (userName, userLetter) => {
    userLetter.toLowerCase();
    const getName = () => userName;
    const getLetter = () => userLetter;
    const getComputerLetter = () => {
        let compLetter = '';
        if (userLetter === 'o') {
            compLetter = 'x';
        } else if (userLetter === 'x') {
            compLetter = 'o';
        }
        return compLetter;
    };
    const lose = () => {
        //lose game here
    };
    const win = () => {
        //win game here
    };
    return { getLetter, getName, getComputerLetter };
};

//const player = Player(`${userName}`, `${userLetter}`);


//object to control the flow of the game
const gamePlay = (() => {
    const play = () => {
        //make a moves here
    }

})();

userInfoSubmit.addEventListener('click', () => {
    console.log(playerName.value, playerLetter.value);
});

//console.log(player.getLetter());
//console.log(player.getName());
//console.log(player.getComputerLetter());

