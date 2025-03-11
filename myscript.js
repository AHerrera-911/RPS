

//generate a number between 0 and 2
//0 = Rock, 1= Paper, 2=Scissors
function getComputerChoice(){
    return(Math.floor((Math.random() * 3)));
}
getComputerChoice();

function getHumanChoice(){
    return(prompt("Enter the word Rock, Paper, or Scissors"));
}



//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        switch(humanChoice.toUpperCase()){
            case "ROCK":
                switch (computerChoice){
                    case 0:
                        console.log("Tie! You both picked Rock.");
                        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
                        break;
                    case 1:
                        console.log("You lose! Paper beats Rock!");
                        computerScore++;
                        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
                        break;
                    default:
                        console.log("You win! Rock beats Scissors!");
                        humanScore++;
                        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
                }
                break;
            case "PAPER":
                switch (computerChoice){
                    case 0:
                        console.log("You win! Paper beats Rock.");
                        humanScore++
                        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
                        break;
                    case 1:
                        console.log("Tie! You both picked Paper.");
                        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
                        break;
                    default:
                        console.log("You lose! Scissors beats Paper.");
                        computerScore++;
                        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
                }
                break;
            default:
                switch (computerChoice){
                    case 0:
                        console.log("You lose! Rock beats Scissors.");
                        computerScore++;
                        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
                        break;
                    case 1:
                        console.log("You win! Scissors beats paper.");
                        humanScore++;
                        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
                        break;
                    default:
                        console.log("Tie. You both picked Scissors.");
                        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
                }           
        }
    }
    for (i=1; i<=5; i++){
        console.log(`Round ${i}`);
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();