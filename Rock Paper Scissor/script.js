let logos = document.querySelectorAll(".logo");
let you = document.querySelector(".you");
let computer = document.querySelector(".computer");

let options = ["rock", "paper", "scissor"]; // Correct initialization

logos.forEach((logo, index) => {
    logo.addEventListener("click", () => {
        // Player's choice
        let playerChoice = options[index];
        you.textContent = playerChoice;

        // Computer's random choice
        let computerChoice = options[Math.floor(Math.random() * options.length)];
        computer.textContent = computerChoice;

        // Determine the result
        let result = determineWinner(playerChoice, computerChoice);

        // Display result
        let msg = document.getElementById("msg");
        msg.textContent = result;
    });
});

// Function to determine the winner
function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a Draw!";
    }
    if (
        (player === "rock" && computer === "scissor") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissor" && computer === "paper")
    ) {
        return "You Win!";
    } else {
        return "Computer Wins!";
    }
}
