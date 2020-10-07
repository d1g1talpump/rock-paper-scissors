let playerPoints = 0;
let computerPoints = 0;
let roundCount = 0;
let playerSelection;
let computerSelection;
let commentary;

startgame.addEventListener('click', function(e) {
    game();
});

btnrock.addEventListener('click', function (e) {
    playerSelection = "Rock";
    computerSelection = computerPlay();
    commentary = playRound(playerSelection, computerSelection);
    appendResult(commentary);
});

btnpaper.addEventListener('click', function (e) {
    playerSelection = "Paper";
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    appendResult(commentary);
});

btnscissors.addEventListener('click', function (e) {
    playerSelection = "Scissors";
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    appendResult(commentary);
});



function game() {
    while (roundCount < 5) {

        roundCount++;
    } if (playerPoints > computerPoints) {
        return ("Yay, you've won! After " + roundCount + " rounds, you've scored " + playerPoints + " and the computer scored " + computerPoints + ".")
    } else if (playerPoints < computerPoints) {
        return ("Boo, you've lost! After " + roundCount + " rounds, you've scored " + playerPoints + " and the computer scored " + computerPoints + ".")
    } else {
        return ("All tied up at the end. After " + roundCount + " rounds, you've scored " + playerPoints + " but the computer also scored " + computerPoints + ".")
    }
}

function appendResult(result) {
    // get element
    const info = document.getElementById('info');

    // Append result in score box
    const commentaryBox = document.createElement('div');
    commentaryBox.textContent = result;

    info.appendChild(commentaryBox);
}


function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * Math.floor(choices.length));
    return choices[i];
}

function playRound(playerSelection, computerSelection) {
    let pChoice = playerSelection.toLowerCase();
    let cChoice = computerSelection.toLowerCase();

    if (pChoice === cChoice) {
        return "Draw! You chose " + playerSelection + " and the computer chose " + computerSelection + ". Therefore no one wins this round.";
    } else if (pChoice === "rock" && cChoice === "paper") {
        playerPoints += 1;
        return "You win, " + playerSelection + " beats " + computerSelection + ".";
    } else if (pChoice === "rock" && cChoice === "scissors") {
        computerPoints += 1;
        return "You loose, " + playerSelection + " doesn't beat " + computerSelection + ".";
    } else if (pChoice === "paper" && cChoice === "rock") {
        playerPoints += 1;
        return "You win, " + playerSelection + " beats " + computerSelection + ".";
    } else if (pChoice === "paper" && cChoice === "scissors") {
        computerPoints += 1;
        return "You loose, " + playerSelection + " doesn't beat " + computerSelection + ".";
    } else if (pChoice === "scissors" && cChoice === "paper") {
        playerPoints += 1;
        return "You win, " + playerSelection + " beats " + computerSelection + ".";
    } else if (pChoice === "scissors" && cChoice === "rock") {
        computerPoints += 1;
        return "You loose, " + playerSelection + " doesn't beat " + computerSelection + ".";
    } else {
        roundCount -= 1;
        console.log("Oops, something went wrong");
    }
}

/*
function game() {
    while (roundCount < 5) {
        playerSelection = prompt("Rock, Paper or Scissors");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        roundCount++;
    } if (playerPoints > computerPoints) {
        alert("Yay, you've won! After " + roundCount + " rounds, you've scored " + playerPoints + " and the computer scored " + computerPoints + ".")
    } else if (playerPoints < computerPoints) {
        alert("Boo, you've lost! After " + roundCount + " rounds, you've scored " + playerPoints + " and the computer scored " + computerPoints + ".")
    } else {
        alert("All tied up at the end. After " + roundCount + " rounds, you've scored " + playerPoints + " but the computer also scored " + computerPoints + ".")
    }
}
alert("Ready for a game of Rock, Paper, Scissors? Hit F12 and open the console.")
game();
*/
