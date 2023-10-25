// We have variables for keeping score
let playerScore = 0;
let computerScore = 0;

// Here are the variables that represent the different buttons for clicking in the game.
let sPaper = document.querySelector('#paper');
let sRock = document.querySelector('#rock');
let sScissors = document.querySelector('#scissors');

// Function for determining the computers choice in a random way in order to get the choice of the computer.
let getComputerChoice = () => {

    let iRandom = Math.floor(Math.random() * 3) + 1;

    if (iRandom === 1) return "Rock";
    if (iRandom === 2) return "Paper";
    if (iRandom === 3) return "Scissors";

};
//We Have a function that plays the game for one round 

// let playRound = () => {

//     let computerSelection = getComputerChoice();
//     let playerSelection = prompt("Input Rock,Paper or Scissors");

//     if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
//         console.log("It is a draw");
//     }
//     if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
//         playerScore = playerScore + 1;
//         console.log(`You Win! ${sPaper} beats Rock`);
//     }
//     if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
//         computerScore = computerScore + 1;
//         console.log(`You Lose! ${sRock} beats Scissors`);
//     }
//     if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
//         computerScore = computerScore + 1;
//         console.log(`You Lose! ${sPaper} beats Rock`);
//     }
//     if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
//         playerScore = playerScore + 1;
//         console.log(`You Win! ${sScissors} beats Paper`);
//     }
//     if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
//         playerScore = playerScore + 1;
//         console.log(`You Win! ${sRock} beats Scissors`);
//     }
//     if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
//         computerScore = computerScore + 1;
//         console.log(`You Lose! ${sScissors} beats Paper`);
//     }

// };

// A function for playing the game 5 times and then declaring the winner 

// let fullGame = () => {
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     };
//     if (playerScore > computerScore) {
//         console.log(`You win! \n Player score: ${playerScore} \n Computer score: ${computerScore}`);
//     };
//     if (playerScore < computerScore) {
//         console.log(`You Lose! \n Player score: ${playerScore} \n Computer score: ${computerScore} `);
//     };
//     if (playerScore === computerScore) {
//         console.log(`It is a draw! \n Player score: ${playerScore} \n Computer score: ${computerScore} `);
//     };

// };

// fullGame();

