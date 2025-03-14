//Based on exercise: https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors

//generate a number between 0 and 2
//0 = Rock, 1= Paper, 2=Scissors
//Return the string in UpperCase.
function getComputerChoice(){
    switch(Math.floor((Math.random() * 3))){
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
    }
}

let selectionResults = document.querySelector("#selectionResults");
let scoreResults = document.querySelector("#scoreResults");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice){
        computerChoice = getComputerChoice();
        //If its a tie, then skip all the checking to see who wins.
        if (humanChoice === computerChoice){
            selectionResults.textContent = (`You picked ${humanChoice} and the computer picked ${computerChoice} - TIE!`);
        }
        //check to see who wins based on what the human selected.
        else {
            switch(humanChoice.toUpperCase()){
                case "ROCK":
                    switch (computerChoice){
                        case "PAPER":
                            selectionResults.textContent = (`You picked ${humanChoice} and the computer picked ${computerChoice} - You lose!`);
                            computerScore++;
                            break;
                        case "SCISSORS":
                            selectionResults.textContent = (`You picked ${humanChoice} and the computer picked ${computerChoice} - You win!`);
                            humanScore++;
                            break;
                     }
                break;
                case "PAPER":
                    switch (computerChoice){
                        case "ROCK":
                            selectionResults.textContent = (`You picked ${humanChoice} and the computer picked ${computerChoice} - You win!`);
                            humanScore++
                            break;
                        case "SCISSORS":
                            selectionResults.textContent = (`You picked ${humanChoice} and the computer picked ${computerChoice} - You lose!`);
                            computerScore++;
                            break;
                }
                break;
                case "SCISSORS":
                    switch (computerChoice){
                        case "ROCK":
                            selectionResults.textContent = (`You picked ${humanChoice} and the computer picked ${computerChoice} - You lose!`);
                            computerScore++;
                            break;
                        case "PAPER":
                            selectionResults.textContent = (`You picked ${humanChoice} and the computer picked ${computerChoice} - You win!`);
                            humanScore++;
                            break;
                } 
                break;          
        }
    }
    scoreResults.textContent=(`Score is you: ${humanScore}, computer: ${computerScore}`);
    if (humanScore == 5){
        scoreResults.textContent=(`Final Score - you: ${humanScore}, computer: ${computerScore} You win!`);
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore ==5){
        scoreResults.textContent=(`Final Score -  you: ${humanScore}, computer: ${computerScore} You lose!`);
        humanScore = 0;
        computerScore = 0;
    }
}
 