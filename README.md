This is a simple game of Rock-Paper-Scissors which is supposed to test my skills in JavaScript.

STEP 1: Understanding the problem.

Two players. Computer vs Human.
Computer has a randomiser that chooses from the pool [Rock, Paper, Scissors].
This selection is kept until the player chooses a value from the same pool.
Then the values are compared and the one which is "winning" wins.

STEP 2: Planning 

Interface
-A simple website with Header, Footer, Body. 
-Three divs where you choose the options. 
-Two counters Computer VS Human.
-One button to reset it. 

Inputs
-Choosing one of three divs as inputs
-A button to reset the progress

Outputs
-A counter of victories of both sides
-Output for winning 
-Output for losing

Steps

STEP 3: Pseudocode
1)Make a function that chooses a random selection of 1 item out of 3.
2)This selection is then stored as a chosen value "computer-input" 
3)Give person a choice of one of the three values (same pool), visual representation 
4)Store the value as a "player-input" 
5)Compare the "computer-input" with "player-input" via a function 
    function (playerInput){
        if (computerInput)
    }    
6)Declare the result of comparison as "You"+ win/lose + Value + "beats" + Value'


Rock beats Scissors
Paper beats Rock
Scissors beats Paper

Paper losses to Scissors
Rock losses to Paper
Scissors losses to Rock


Pressing on paper = playerInput = "Paper"
function checkPaper(){
    if (computerInput === "rock"){
        return "You win, Paper beats Rock!"
    } else if (computerInput === "scissors"){
        return "You lost, Scissors beat Paper!"
    } else {
        return "That is a tie, no winners this time"
        }
    };

Pressing on rock = playerInput = "Rock"
function checkRock(){
    if (computerInput === "scissors"){
        return "You win, Rock beats Scissors!"
    } else if (computerInput === "paper"){
        return "You lost, Paper beats Rock!"
    } else {
        return "That is a tie, no winners this time"
        }
    };

Pressing on scissors = playerInput = "Scissors"
function checkScissors(){
    if (computerInput === "paper"){
        return "You win, Scissors beat Paper!"
    } else if (computerInput === "rock"){
        return "You lost, Rock beats Scissors!"
    } else {
        return "That is a tie, no winners this time"
        }
    };



