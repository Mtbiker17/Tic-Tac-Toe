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
        let move = 0;
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
                    if (player1.turn === true && player2.turn === false) {
                        e.target.textContent = `${player1.letter}`;
                        player1.turn = false;
                        player2.turn = true;
                        board.splice(e.target.id, 1, player1.letter);
                        let indexesO = [], i;
                        for (i = 0; i < board.length; i++)
                            if (board[i] === "O") {
                                indexesO.push(i);
                            }
                        move++;
                        checkWinner(indexesO, player1.name, move);

                    } else if (player2.turn === true && player1.turn === false) {
                        e.target.textContent = `${player2.letter}`;
                        player1.turn = true;
                        player2.turn = false;
                        board.splice(e.target.id, 1, player2.letter);
                        let indexesX = [], i;
                        for (i = 0; i < board.length; i++)
                            if (board[i] === "X") {
                                indexesX.push(i);
                            }
                        move++
                        checkWinner(indexesX, player2.name, move);
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

        const checkWinner = (indexes, player, move) => {
            winCombos.forEach(combo => {
                const check = (indexes, combo) => combo.every(v => indexes.includes(v));
                if (check(indexes, combo) === true) {
                    win = true;
                    displayController.winnerScreen(player, move, win);
                    play = displayController.play;
                }
                if (move === 9 && win == true) {
                    return;
                } else {
                    win = false;
                    displayController.winnerScreen(player, move, win);
                }
            })
        };
    })();
});

//player versus computer activation;
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
        }

        let username = playerVersusComputerName.value;
        let difficultyChoice = difficulty.value;
        if (username === "") {
            username = 'Player 1';
        }
        const player = PVC(username, "O", true);
        const computer = PVC("Computer", 'X', false);
        displayController.removeMain();
        if (difficultyChoice === "easy") {
            difficultyFunctions.easy(player, computer, board);
        } /*else if (difficultyChoice === "normal") {
            normal(player, computer);
        } else if (difficultyChoice === "impossible") {
            impossible(player, computer);
        }*/
    })();
});


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
        p1.textContent = `${player1}  "O"`;
        p2.textContent = `${player2}  "X"`;
    };

    const winnerScreen = (player, move, win) => {
        let winner = document.getElementById('winner');
        if (win === true) {
            winner.textContent = `${player} is the winner!`;
            return;
        }
        if (move === 9 && win === false) {
            winner.textContent = "It's a tie!";

        }
    };

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

const difficultyFunctions = (() => {
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

    const checkWinner = (indexes, player, move) => {
        winCombos.forEach(combo => {
            const check = (indexes, combo) => combo.every(v => indexes.includes(v));
            if (check(indexes, combo) === true) {
                win = true;
                displayController.winnerScreen(player, move, win);
                play = displayController.play;
            }
            if (move === 9 && win == true) {
                return;
            } else {
                win = false;
                displayController.winnerScreen(player, move, win);
            }
        });
    };

    const easy = (player, computer, board) => {
        let move = 0;
        gameBlocks.forEach(block => {
            block.addEventListener('click', (e) => {
                if (e.target.textContent === 'O' || e.target.textContent === 'X') {
                    return;
                }
                if (player.turn === true && computer.turn === false) {
                    e.target.textContent = `${player.letter}`;
                    move++;
                    player.turn = false;
                    computer.turn = true;
                    board.splice(e.target.id, 1, player.letter);
                    let indexesO = [], i;
                    for (i = 0; i < board.length; i++)
                        if (board[i] === "O") {
                            indexesO.push(i);
                        }
                    checkWinner(indexesO, player.name, move);
                }
                if (computer.turn === true) {
                    let target = Math.floor(Math.random() * (8 - 1 + 1) + 1);
                    if (board[target] === "") {
                        board.splice(target, 1, computer.letter);
                    } else {
                        for (b = 0; b < board.length; b++) {
                            target = Math.floor(Math.random() * (8 - 1 + 1) + 1);
                            if (board[target] === "") {
                                board.splice(target, 1, computer.letter);
                                break;
                            }
                        }
                    }
                    let indexesX = [], i;
                    for (i = 0; i < board.length; i++)
                        if (board[i] === "X") {
                            indexesX.push(i);
                        }
                    gameBlocks.forEach(block => {
                        value = block.id;
                        block.textContent = board[value];
                    })
                    player.turn = true;
                    computer.turn = false;
                    move++;
                    checkWinner(indexesX, computer.name, move);
                };
            });
        });
    };
    return { easy };
})();