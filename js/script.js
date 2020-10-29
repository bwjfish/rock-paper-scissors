        /* 0 = Rock, 1 = Paper, 2 = Scissors */
        function computerPlay() {
            computerChoice = Math.floor(Math.random()*3);
            if (computerChoice == 0) {
                return "rock";
            } else if (computerChoice == 1) {
                return "paper";
            } else if (computerChoice == 2) {
                return "scissors";
            } else {
                return "error";
            }
        }

        /* returns 0 if player wins, 1 if computer wins, 2 if a tie */
        function playRound(playerSelection, computerSelection) {
            if (playerSelection == computerSelection) {
                return 2;
            } else if (playerSelection == "rock") {
                switch (computerSelection) {
                    case "paper":
                        return 1;
                    
                    case "scissors":
                        return 0;
                    
                    default:
                        return -1;
                }
            } else if (playerSelection == "paper") {
                switch (computerSelection) {
                    case "rock":
                        return 0;
                    
                    case "scissors":
                        return 1
                    
                    default:
                        return -1;
                }
            } else if (playerSelection == "scissors") {
                switch (computerSelection) {
                    case "rock":
                        return 1;
                    
                    case "paper":
                        return 0;
                    
                    default:
                        return -1;
                }
            } else {
                return -1;
            }
        }

        function game() {
            computerScore = 0;
            playerScore = 0;
            for (let i = 0; i < 5; i++) {
                playerSelection = prompt();
                playerSelection = playerSelection.toLowerCase();
                computerSelection = computerPlay();
                console.log("You chose: " + playerSelection);
                console.log("Computer chose: " + computerSelection);
                if (playRound(playerSelection, computerSelection) == 0) {
                    console.log("You Win!");
                    playerScore += 1;
                } else if (playRound(playerSelection, computerSelection) == 1) {
                    console.log("Computer Wins");
                    computerScore += 1;
                } else if (playRound(playerSelection, computerSelection) == 2) {
                    console.log("Tie!");
                } else {
                    console.log("error");
                }

                console.log("Your score = " + playerScore);
                console.log("Computer score = " + computerScore);
            }

            if (computerScore == playerScore) {
                console.log("Tie game overall.");
            } else if (computerScore > playerScore) {
                console.log("Computer won the round");
            } else {
                console.log("You won the round!");
            }
        }

        game();