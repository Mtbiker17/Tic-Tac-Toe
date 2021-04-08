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

//player versus player activation
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
        displayController.playerDisplay(player1.name, player2.name);
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
                    displayController.winnerScreen(player);
                    play = displayController.play;
                }
            })
        };
    })();
});

//player versus computer activation;
/*
submitButton2.addEventListener('click', () => {
    let play = true;
    let board = [];
    if (play === true) {
        gameBlocks.forEach(gameBlocks => {
            board.push("");
        })
    }

    const computerGameboard = (() => {
        const PVC = (name, letter, turn) => {
            return { name, letter, turn };
        };

        let username = playerVersusComputerName.value;
        let difficultyChoice = difficulty.value;
        if (username === "") {
            username = 'Player 1';
        }
        const player = PVC(username, "O", true);
        const computer = PVC("Computer", 'X', false);
        console.log(player, computer, difficultyChoice);
        displayController.removeMain();
        if (difficultyChoice === "easy") {
            easy(player, computer);
        } else if (difficultyChoice === "normal") {
            normal(player, computer);
        } else if (difficultyChoice === "impossible") {
            impossible(player, computer)
        }
        //checkWinner()
    })();
});
*/

const displayController = (() => {
    let play = false;
    let playerContainer = document.getElementById('playerContainer');
    let restart = document.getElementById('restart');
    let resetContainer = document.getElementById('resetContainer');


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

    const playerDisplay = (player1, player2) => {
        let p1 = document.getElementById('p1');
        let p2 = document.getElementById('p2');
        p1.textContent = `Player 1: ${player1} - "O"`;
        p2.textContent = `Player 2: ${player2} - "X"`;
    };

    const winnerScreen = (player) => {
        let winner = document.getElementById('winner');
        winner.textContent = `${player} is the winner!`;
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
        window.location.reload();
    });

    return { winnerScreen, removeMain, playerDisplay, play };
})();

/*const difficultyFunctions = (() => {
    const easy = (player, computer) => {
        gameBlocks.forEach(block => {
            block.addEventListener('click', (e) => {
                if (e.target.textContent === 'O' || e.target.textContent === 'X' || play === false) {
                    return;
                }
                if (player1.turn === true && computer.turn === false) {
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
                }
            })
        })
    }
    return { easy, normal, impossible };
})();
*/