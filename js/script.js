const pathToRockPng = "img/rock.png";
const pathToPaperPng = "img/paper.png";
const pathToScissorsPng = "img/scissors.png";

let playerScore = 0;
let computerScore = 0;

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

function displayCurrentMatch(playerSelection, computerSelection) {
    let parentelement = document.querySelector("#game-log-container");
    
    if (parentelement.childElementCount == 3) {
        parentelement.removeChild(parentelement.children[0]);
        parentelement.removeChild(parentelement.children[1]);
    }
    
    newChildPlayerSelection = document.createElement("img")
    
    if (playerSelection == "rock") {
        newChildPlayerSelection.setAttribute("src", pathToRockPng);
    } else if (playerSelection == "paper") {
        newChildPlayerSelection.setAttribute("src", pathToPaperPng);
    } else if (playerSelection == "scissors") {
        newChildPlayerSelection.setAttribute("src", pathToScissorsPng);
    } else {
        console.log("error");
    }
    newChildPlayerSelection.style.height = "20%";
    newChildPlayerSelection.style.width = "10%";

    parentelement.prepend(newChildPlayerSelection);

    newChildComputerSelection = document.createElement("img")
    
    if (computerSelection == "rock") {
        newChildComputerSelection.setAttribute("src", pathToRockPng);
    } else if (computerSelection == "paper") {
        newChildComputerSelection.setAttribute("src", pathToPaperPng);
    } else if (computerSelection == "scissors") {
        newChildComputerSelection.setAttribute("src", pathToScissorsPng);
    } else {
        console.log("error");
    }
    newChildComputerSelection.style.height = "20%";
    newChildComputerSelection.style.width = "10%";
    parentelement.append(newChildComputerSelection);

}

/* returns 0 if player wins, 1 if computer wins, 2 if a tie */
function playSingleGameHelper(playerSelection, computerSelection) {
    displayCurrentMatch(playerSelection, computerSelection);

    if (playerSelection == computerSelection) {
        console.log("tie");
        return 2;
    } else if (playerSelection == "rock") {
        switch (computerSelection) {
            case "paper":
                return 1;
            
            case "scissors":
                console.log("player wins");
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
                console.log("computer wins");
                return 1;
            
            case "paper":
                console.log("player wins");
                return 0;
            
            default:
                return -1;
        }
    } else {
        return -1;
    }
}


function playSingleGame(e) {
    let result;
    if (e.target.id == "rock-button") {
        result = playSingleGameHelper("rock", computerPlay());
    } else if (e.target.id == "paper-button") {
        result = playSingleGameHelper("paper", computerPlay());
    } else if (e.target.id == "scissors-button") {
        result = playSingleGameHelper("scissors", computerPlay());
    } 

    console.log("result = " + result);
    if (result == 0) {
        playerScore += 1;
    } else if (result == 1) {
        computerScore += 1;
    } else if (result == 2) {
        // pass
    } else {
        console.log("error");
    }

    if (playerScore == 5 || computerScore == 5) {
        document.getElementById("buttons-container").remove();
        document.getElementById("game-log-container").remove();
        displayFinalScore(playerScore, computerScore);
    }  
}

function displayFinalScore(playerScore, computerScore) {
    currNode = document.querySelector("h1")
    currNode.textContent = "Final Score";

    bodyNode = document.querySelector("body");
    
    newNode = document.createElement("button");
    newNode.textContent = "New Game";
    newNode.setAttribute("type", "text");
    newNode.setAttribute("style", "background-color: #4CAF50; border: none;"
        + "color: white; padding: 20px; text-align: center;text-decoration: none;" 
        + "display: block; font-size: 16px;margin-top: 40px; margin-left: auto;"
        + "margin-right: auto; border-radius: 50%;");
    
    newNode.addEventListener("click", function () {
        location.reload();
    });
    
    bodyNode.append(newNode);

}

function updateScore() {
    let playerScoreElement = document.querySelector("#player-score");
    playerScoreElement.textContent = `${playerScore}`;

    let computerScoreElement = document.querySelector("#computer-score");
    computerScoreElement.textContent = `${computerScore}`;
}

function handleEvent(e) {
    playSingleGame(e);
    updateScore();
}

const playRockButton = document.querySelector("#rock-button");
playRockButton.addEventListener("click", handleEvent);

const playPaperButton = document.querySelector("#paper-button");
playPaperButton.addEventListener("click", handleEvent);

const playScissorsButton = document.querySelector("#scissors-button");
playScissorsButton.addEventListener("click", handleEvent);
