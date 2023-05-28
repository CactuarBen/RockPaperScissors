//Game Mechanic

const gameValues = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0
let roundWinner = ''

function getComputerChoice(){
    let computerChoice = gameValues[Math.floor((Math.random()*3))];
}

function playGame(playerChoice){
    let computerChoice = gameValues[Math.floor((Math.random()*3))];
    console.log(computerChoice)
    console.log(playerChoice)

    if (computerChoice===playerChoice){
        roundWinner = "Draw, both values are the same"
    } else if ((computerChoice==="rock" && playerChoice==="paper") || (computerChoice==="paper" && playerChoice==="scissors") || (computerChoice==="scissors" && playerChoice==="rock")){
        playerScore++
        roundWinner = 'player'
        console.log("player won")
    } else if ((computerChoice==="paper" && playerChoice==="rock") || (computerChoice==="scissors" || playerChoice==="paper") || (computerChoice==="rock" && playerChoice==="scissors")){
        computerScore++
        roundWinner = 'computer'
        console.log("computer won")
    } 
    robotScore.innerText = "Current Score is "+ computerScore;
humanScore.innerText = "Current Score is "+ playerScore;
    isGameOver();
}

function  isGameOver(){
    if (computerScore === 5){
        alert("Computer won")
    } else if (playerScore === 5){
        alert("Player won")
    }
}


// User Interface Mechanics

const rockButton = document.querySelector("#rockBtn")
const paperButton = document.querySelector("#paperBtn")
const scissorsButton = document.querySelector("#scissorsBtn")
const robotScore = document.querySelector("#score-pc")
const humanScore = document.querySelector("#score-person")

robotScore.innerText = "Current Score is "+ computerScore;
humanScore.innerText = "Current Score is "+ playerScore;

rockButton.addEventListener('click', function (e) {
    //console.log(e.target);
    //console.log("logs rock")
    playGame("rock")
});

paperButton.addEventListener('click', function (e) {
    //console.log(e.target);
    //console.log("logs paper")
    playGame("paper")
});

scissorsButton.addEventListener('click', function (e) {
    //console.log(e.target);
    //console.log("logs scissors")
    playGame("scissors")
});

//rockBtn.addEventListener('click', () => handleClick('ROCK'))
//paperBtn.addEventListener('click', () => handleClick('PAPER'))
//scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))

///////const playerScorePara = document.getElementById('score-person')
//const computerScorePara = document.getElementById('score-pc') 

//return `Player Score: ${playerScore}, Computer Score: ${computerScore}`;