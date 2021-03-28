const playerOneName = document.getElementById('playerOneName');
const playerTwoName = document.getElementById('playerTwoName');
const playerInfo = document.getElementById('playerInfo');
const computerInfo = document.getElementById('computerInfo');
const userMain = document.getElementById('userMain');
const backToMain = document.getElementById('backToMain');
const backtoMain2 = document.getElementById('backToMain2');
const playerVPlayer = document.getElementById('playerVPlayer');
const playerVComputer = document.getElementById('playerVComputer');
const playerVersusComputerName = document.getElementById('playerVersusComputerName');
const submitButton = document.getElementById('submitButton');
const submitButton2 = document.getElementById('submitButton2');
const boardDisplay = document.getElementById('boardDisplay');
const difficulty = document.getElementById('difficulty');
const gameBlocks = document.querySelectorAll('[data-block]');
let play = false;



const displayController = (() => {
    gameBlocks.forEach(gameBlocks => {
        gameBlocks.textContent = "";
    })

})();


const getPlayers = (() => {
    const Player = (name, letter, turn) => {
        return { name, letter, turn };
    };

    submitButton.addEventListener('click', () => {
        let playerOne = playerOneName.value;
        let playerTwo = playerTwoName.value;
        if (playerOne === "") {
            playerOne = 'Player 1';
        }
        if (playerTwo === "") {
            playerTwo = 'Player 2';
        }
        const player1 = Player(playerOne, 'O', true);
        const player2 = Player(playerTwo, 'X', false);
        removeMain();
        console.log({player1, player2});
    });
})();




//object to control the flow of the game
const gameBoard = (() => {



    let boardArray = [];
    return { boardArray };
})();


function removeMain() {
    userMain.remove();
    playerInfo.remove();
    computerInfo.remove();
    boardDisplay.style.transitionDuration = "1s";
    boardDisplay.style.width = "100%";
    boardDisplay.style.height = "100%";
}

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


/*const blockZero = document.getElementById('blockZero');
const blockOne = document.getElementById('blockOne');
const blockTwo = document.getElementById('blockTwo');
const blockThree = document.getElementById('blockThree');
const blockFour = document.getElementById('blockFour');
const blockFive = document.getElementById('blockFive');
const blockSix = document.getElementById('blockSix');
const blockSeven = document.getElementById('blockSeven');
const blockEight = document.getElementById('blockEight');*/

/*submitButton2.addEventListener('click', () => {
       let userName = playerVersusComputerName.value;
       let difficultyChoice = difficulty.value;
       if (userName === "") {
           userName = 'Player 1';
       }
       removeMain();
       return (user1 = PVC(userName, 'O', 'X', difficultyChoice));
   });
   const PVC = (userName, userLetter, computerLetter, difficultyChoice) => {
       return { userName, userLetter, computerLetter, difficultyChoice };
   };*/