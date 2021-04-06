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

submitButton.addEventListener('click', () => {
    const Gameboard = (() => {
        let play = true;
        let board = [];
        const Player = (name, letter, turn) => {
            return { name, letter, turn };
        };

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
        displayController.removeMain();
        console.log({ player1, player2 });

        //rotate player 1 and player 2 turns, push into array and compare winning combos
        if (play === true) {
            gameBlocks.forEach(gameBlocks => {
                board.push("");
            });
            gameBlocks.forEach(block => {
                block.addEventListener('click', (e) => {
                    if (e.target.textContent === 'O' || e.target.textContent === 'X' || play === false) {
                        return;
                    }
                    console.log(play)
                    if (player1.turn === true && player2.turn === false) {
                        e.target.textContent = `${player1.letter}`;
                        player1.turn = false;
                        player2.turn = true;
                        board.splice(e.target.id, 1, player1.letter);
                        console.log(board)
                        let indexesO = [], i;
                        for (i = 0; i < board.length; i++)
                            if (board[i] === "O") {
                                indexesO.push(i);
                            }
                        console.log(indexesO);
                        checkWinner(indexesO, player1.name);

                    } else if (player2.turn === true && player1.turn === false) {
                        e.target.textContent = `${player2.letter}`;
                        player1.turn = true;
                        player2.turn = false;
                        board.splice(e.target.id, 1, player2.letter);
                        console.log(board);
                        let indexesX = [], i;
                        for (i = 0; i < board.length; i++)
                            if (board[i] === "X") {
                                indexesX.push(i);
                            }
                        console.log(indexesX);
                        checkWinner(indexesX, player2.name);
                        console.log(play)
                    }
                })
            })
        };

        const winCombos = [
            [0, 1, 2],
            [0, 3, 6],
            [3, 4, 5],
            [6, 7, 8],
            [1, 4, 7],
            [2, 4, 6],
            [2, 5, 8],
            [0, 4, 8]
        ];

        const checkWinner = (indexes, player) => {
            winCombos.forEach(combo => {
                const check = (indexes, combo) => combo.every(v => indexes.includes(v));
                if (check(indexes, combo) === true) {
                    console.log('winner!', player);
                    displayController.winnerScreen();
                }
            })
        };
    })();
});

const displayController = (() => {
    let play = false;
    let playerContainer = document.getElementById('playerContainer');
    let restart = document.getElementById('restart');
    let resetContainer = document.getElementById('resetContainer');
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');

   const removeMain = () => {
        userMain.remove();
        playerInfo.remove();
        computerInfo.remove();
        boardDisplay.style.transitionDuration = "1s";
        boardDisplay.style.width = "100%";
        boardDisplay.style.height = "100%";
        playerContainer.style.display = "flex";
        resetContainer.style.display = 'flex';
    };

    const winnerScreen = (player) => {
        console.log('winnerscreen')
        console.log(player);
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

    restart.addEventListener('click', () => {

    });
    return { winnerScreen, removeMain };
})();

/*

submitButton2.addEventListener('click', () => {
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