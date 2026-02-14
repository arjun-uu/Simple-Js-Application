let boxes = document.querySelectorAll(".box"); // Every box will become a node list and act like an array element
let resetBtn = document.querySelector(".reset");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let turn0 = true;
let gameOver = false;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.textContent === "" && !gameOver) { // Check for empty box and if game is not over
            if (turn0) { // Player 0
                box.textContent = "0";
                box.style.backgroundColor = "#ADD8E6";
                turn0 = false;
            } else { // Player X
                box.textContent = "X";
                box.style.backgroundColor = "#F4C2C2";
                turn0 = true;
            }
            checkWinner();
            if (!gameOver) { // Only check for draw if there is no winner yet
                checkDraw();
            }
        }
    });
});

const checkWinner = () => {
    // Check for winning patterns
    winPatterns.forEach((pattern) => {
        let a = boxes[pattern[0]].textContent;
        let b = boxes[pattern[1]].textContent;
        let c = boxes[pattern[2]].textContent;
        if (a === b && b === c && a !== "") {
            alert(`Player ${a} wins!`);
            gameOver = true; // End the game
        }
    });
};

const checkDraw = () => {
    let allFilled = true;
    boxes.forEach((box) => {
        if (box.textContent === "") {
            allFilled = false;
        }
    });
    
    if (allFilled) {
        alert("It's a draw!");
        gameOver = true; // End the game
    }
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.textContent = "";
        box.style.backgroundColor = "";
    });
    gameOver = false; // Reset the game-over state
};

resetBtn.addEventListener("click", resetGame);
