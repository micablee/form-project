let board = document.getElementById("board");
let resultMessage = document.getElementById("resultMessage");

let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let gameHistory = [];
let playerTurn1 = true;
let currentMove = -1;

function createBoard() {
    for (let i = 0; i < 9; i++) {
        let tictactoeGrid = document.createElement("div");
        tictactoeGrid.classList.add("tictactoeBox");
        let gridId =`box${i}`;
        tictactoeGrid.setAttribute("id", gridId);
        board.appendChild(tictactoeGrid);
        tictactoeGrid.addEventListener("click", () => {
            addMove(gridId, i);
        });
    }
}

function addMove(element, boxNumber) {
    let specificGrid = document.getElementById(element);
    // checks if the frid is empty and the game is still ongoing
    if (!specificGrid.textContent && resultMessage.textContent === "") {
        specificGrid.textContent = playerTurn1 ? "X" : "O"; // Set current player's symbol
        gameBoard[Math.floor(boxNumber / 3)][boxNumber % 3] = specificGrid.textContent;
        gameHistory.push(gameBoard.map(row => row.slice())); // save the same state
        currentMove++; // increment the current move
        checkWin();
        updateButtons(); // update the button states
        playerTurn1 = !playerTurn1;
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (gameBoard[Math.floor(a / 3)][a % 3] &&
            gameBoard[Math.floor(a / 3)][a % 3] === gameBoard[Math.floor(b / 3)][b % 3] &&
            gameBoard[Math.floor(a / 3)][a % 3] === gameBoard[Math.floor(c / 3)][c % 3]) {
                resultMessage.textContent = `Player ${gameBoard[Math.floor(a / 3)][a % 3]} wins!`;
                return;
            }
    }
    if (currentMove === 8) {
        resultMessage.textContent = "It's a draw!";
    }
}

function resetGame() {
    gameBoard = [['', '', ''], ['', '', ''], ['', '', '']];
    gameHistory = [];
    playerTurn1 = true;
    currentMove = -1; // reset current move
    document.querySelectorAll('.tictactoeBox').forEach(box => box.textContent = '');
    updateButtons(); // update button states
    resultMessage.textContent = ""; // clear result message
}

function showPreviousMove() {
    if (currentMove > 0) {
        currentMove--;
        loadMove(gameHistory[currentMove]);
    }
    updateButtons(); // update button states
}

function showNextMove() {
    if (currentMove < gameHistory.length - 1) {
        currentMove++;
        loadMove(gameHistory[currentMove]);
    }
    updateButtons(); // update button states
}

function loadMove(move) {
    // reset the board and load the specified move
    gameBoard = move.map(row => row.slice());
    document.querySelectorAll('.tictactoeBox').forEach((box, index) => {
        box.textContent = gameBoard[Math.floor(index / 3)][index % 3];

    });
    playerTurn1 = (currentMove % 2 === 0); // determine current player's turn
}

function updateButtons() {
    document.getElementById("previousButton").disabled = (currentMove <= 0);
    document.getElementById("nextButton").disabled = (currentMove >= gameHistory.length - 1);
}

// initialize the game board when the script loads
createBoard();
