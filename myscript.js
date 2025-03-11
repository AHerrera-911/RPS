

//generate a number between 0 and 2
//0 = Rock, 1= Paper, 2=Scissors
//Return the string in UpperCase.
computerSelection = function getComputerChoice(){
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

//Get Rock, Paper, or Scissor selection from Human. Return the value in Uppercase if the value is valid.
humanSelection = function getHumanChoice(){
    keepGoing = true;
    while (keepGoing){
        userInput = prompt("Enter the word Rock, Paper, or Scissors");
        if (userInput !== null && (userInput.toUpperCase() == "ROCK" || userInput.toUpperCase() == "PAPER" || userInput.toUpperCase() == "SCISSORS")){
            return userInput.toUpperCase();
        }
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        console.log(`You picked ${humanChoice} and the computer picked ${computerChoice}`);
        //If its a tie, then skip all the checking to see who wins.
        if (humanChoice === computerChoice){
            console.log("TIE!");
        }
        //check to see who wins based on what the human selected.
        else {
            switch(humanChoice.toUpperCase()){
                case "ROCK":
                    switch (computerChoice){
                        case "PAPER":
                            console.log("You lose! Paper beats Rock!");
                            computerScore++;
                            break;
                        case "SCISSORS":
                            console.log("You win! Rock beats Scissors!");
                            humanScore++;
                            break;
                     }
                break;
                case "PAPER":
                    switch (computerChoice){
                        case "ROCK":
                            console.log("You win! Paper beats Rock.");
                            humanScore++
                            break;
                        case "SCISSORS":
                            console.log("You lose! Scissors beats Paper.");
                            computerScore++;
                            break;
                }
                break;
                case "SCISSORS":
                    switch (computerChoice){
                        case "ROCK":
                            console.log("You lose! Rock beats Scissors.");
                            computerScore++;
                            break;
                        case "PAPER":
                            console.log("You win! Scissors beats paper.");
                            humanScore++;
                            break;
                } 
                break;          
        }
    }
    }
    //Play Rock, Paper, Scissors 5 times against the computer.
    for (i=1; i<=5; i++){
        console.log(`Round ${i}`);
        playRound(humanSelection(), computerSelection());
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    }
    console.log("Game Over. Thanks for playing!");
}
playGame();