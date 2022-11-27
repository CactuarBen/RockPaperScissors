//Game Mechanic

const gameValues = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0
let roundWinner = ''

function getComputerChoice(){
    let computerChoice = gameValues[Math.floor((Math.random()*3))];
}

function getPlayerChoice(){
    let playerChoice = prompt("What would you choose? Rock, Paper or Scissors?")
}

function playGame(playerChoice, computerChoice){
    if (computerChoice===playerChoice){
        roundWinner = "Draw, both values are the same"
    } 
    if ((computerChoice==="rock" && playerChoice==="paper") || (computerChoice==="paper" && playerChoice==="scissors") || (computerChoice==="scissors" && playerChoice==="rock")){
        playerScore++
        roundWinner = 'player'
    }
    if ((computerChoice==="paper" && playerChoice==="rock") || (computerChoice==="scissors" || playerChoice==="paper") || (computerChoice==="rock" && playerChoice==="scissors")){
        computerScore++
        roundWinner = 'computer'
    }
}

function  isGameOver(){
    if (computerScore === 5){
        alert("Computer won")
    } else if (playerScore === 5){
        alert("Player won")
    }
}

const playerChoice = "rock";
const computerChoice = getComputerChoice();
console.log(playGame(playerChoice, computerChoice));
// User Interface Mechanics
//rockBtn.addEventListener('click', () => handleClick('ROCK'))
//paperBtn.addEventListener('click', () => handleClick('PAPER'))
//scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))

///////const playerScorePara = document.getElementById('score-person')
//const computerScorePara = document.getElementById('score-pc') 

//return `Player Score: ${playerScore}, Computer Score: ${computerScore}`;