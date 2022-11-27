let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;
let choices=["rock", "paper", "scissors"];

function getComputerChoice(){
    computerSelection=choices[Math.floor(Math.random()*3)];
    return computerSelection;
}

function getPlayerChoice(){
    playerSelection = prompt("Choose: Rock, Paper or Scissors");
    return playerSelection = playerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        console.log("Tie, no one won this one");
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")){
        computerScore++
        console.log("Computer won this one, Computer Score is " + computerScore)
    } else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors")){
        playerScore++
        console.log("You have won this one! Your Score is " + playerScore)
    }   else {
        console.log ("That is not one of the options for you to choose, choose again")
    }
}


function game(){
    while((computerScore < 5) && (playerScore < 5)){
        getComputerChoice();
        getPlayerChoice();
        playRound(playerSelection, computerSelection);
        
    }console.log (`You have ${playerScore} points, and the computer has ${computerScore}`)
    if (computerScore === 5){
        console.log("The Computer Emerges Victorious")
    } else if (playerScore === 5){
        console.log("Congratulations, you won!")
    }
}   


console.log(game());