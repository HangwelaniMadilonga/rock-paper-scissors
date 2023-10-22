// We have variables for keeping score
let ipScore = 0;
let icScore = 0;

// Here are the variables for what will appear when we have an output to the user.
let sPaper = "Paper";
let sRock = "Rock";
let sScissors = "Scissors";

//Funtion for determining the computers choice in a random way
let getComputerChoice = () => {

    let iRandom = Math.floor(Math.random() * 3) + 1;

    if (iRandom === 1) return "Rock";
    if (iRandom === 2) return "Paper";
    if (iRandom === 3) return "Scissors";

}
//We 

let playRound = (getComputerChoice, playerSelection) => {

    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Input Rock,Paper or Scissors");

    if (toLower(computerSelection) === toLower(playerSelection)) {
        console.log("It is a draw")
    }
    if (toLower(computerSelection) === "rock" && toLower(playerSelection) === "paper") {
        ipScore = icScore + 1;
        console.log(`You Win! ${sPaper} beats Rock`)
    }
    if (toLower(computerSelection) === "rock" && toLower(playerSelection) === "scissor") {
        icScore = icScore + 1;
        console.log(`You Lose! ${sScissor} beats Rock`)
    }
    if (toLower(computerSelection) === "paper" && toLower(playerSelection) === "rock") {
        icScore = icScore + 1;
        console.log(`You Lose! ${sPaper} beats Rock`)
    }
    if (toLower(computerSelection) === "paper" && toLower(playerSelection) === "scissor") {
        icScore = icScore + 1;
        console.log(`You Win! ${sPaper} beats Scissors`)
    }
    if (toLower(computerSelection) === "scissor" && toLower(playerSelection) === "rock") {
        icScore = icScore + 1;
        console.log(`You Win! ${sRock} beats Scissors`)
    }
    if (toLower(computerSelection) === "scissor" && toLower(playerSelection) === "paper") {
        cScore = cScore + 1;
        console.log(`You Lose! ${sScissors} beats Paper`)
    }

}


