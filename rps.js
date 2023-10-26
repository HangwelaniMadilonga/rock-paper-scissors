
let playerScore = 0;
let computerScore = 0;

let playerSelection = "";
let computerSelection = "";

let sPaper = "Paper";
let sRock = "Rock";
let sScissors = "Scissors";

let getComputerChoice = () => {

    let iRandom = Math.floor(Math.random() * 3) + 1;

    if (iRandom === 1) return "Rock";
    if (iRandom === 2) return "Paper";
    if (iRandom === 3) return "Scissors";

};

let buttons = document.querySelectorAll('.rps-buttons');
let firstImage = document.querySelector('#first-image')
let secondImage = document.querySelector('#second-image')


for (let button of buttons) {
    button.addEventListener('click', function () {
        playerSelection = button.textContent;
        computerSelection = getComputerChoice();
        makeHandsShake();
        changeImage(computerSelection, firstImage);
        changeImage(playerSelection, secondImage);
        // Now 'playerSelection' holds the text content of the clicked button

    });
};


// const buttonText = button.textContent;

// let getPlayerChoice = (td) => {
//     doc
// };

// Function for determining the computers choice in a random way in order to get the choice of the computer.


makeHandsShake = () => {
    firstImage.classList.add('slide-in-inverted');
    secondImage.classList.add('slide-in');

};

removeShakeClass = () => {
    firstImage.classList.remove('slide-in-inverted');
    secondImage.classList.remove('slide-in');

};

changeImage = (Selection, Image) => {
    if (Selection === "Rock") {
        Image.src = "Assets/rock (1).png"
    }
    if (Selection === "Paper") {
        Image.src = "Assets/paper.png"
    }
    if (Selection === "Scissors") {
        Image.src = "Assets/scissors.png"
    }

}
// setTimeout(() => {
//     firstImage.classList.add('slide-in-for-inverted');
//     secondImage.classList.add('slide-in');
// }, 4000);



//We Have a function that plays the game for one round 

// let playRound = () => {


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

