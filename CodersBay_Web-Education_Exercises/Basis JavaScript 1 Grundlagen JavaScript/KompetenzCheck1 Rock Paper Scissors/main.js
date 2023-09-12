let movesLeft = document.getElementById("movesLeft")
//const f. html elements
let result = document.querySelector('.result')

let playerScoreBoard = document.querySelector('.p-count')
let computerScoreBoard = document.querySelector('.c-count')

let computerOutcome = document.getElementById("computerOutcome")
let playerOutcome = document.getElementById("playerOutcome")

let computerOptions = ['rock', 'paper', 'scissors']

let laps

let computerScore = 0
let playerScore = 0

// 0 == "0" => true
// 0 === "0" => false

function lapInput() {
    laps = prompt("how many turns do you want to play? ")
    movesLeft.textContent = "Moves Left: " + laps
}

function relPage() {
    location.reload();
}

function computerchoosing() {
    let chosenRandom = Math.floor(Math.random() * 151)
    if (chosenRandom < 50) {
        computerOutcome.textContent = computerOptions[0]
    } else if (chosenRandom < 100) {
        computerOutcome.textContent = computerOptions[1]
    } else {
        computerOutcome.textContent = computerOptions[2]
    }
}

function gameoutput() {
    computerchoosing()
    if (playerOutcome.textContent === computerOutcome.textContent) {
        result.textContent = "Tie"
    }
    else if (playerOutcome.textContent == "rock") {
        if (computerOutcome.textContent == "paper") {
            result.textContent = "Computer Won the round"
            computerScore++
            computerScoreBoard.textContent = computerScore
        } else {
            result.textContent = "Player Won the round"
            playerScore++
            playerScoreBoard.textContent = playerScore
        }
    }
    else if (playerOutcome.textContent == "scissors") {
        if (computerOutcome.textContent == "rock") {
            result.textContent = "Computer Won the round"
            computerScore++
            computerScoreBoard.textContent = computerScore
        } else {
            result.textContent = "Player Won the round"
            playerScore++
            playerScoreBoard.textContent = playerScore
        }
    }
    else if (playerOutcome.textContent == "paper") {
        if (computerOutcome.textContent == "scissors") {
            result.textContent = "Computer Won the round"
            computerScore++
            computerScoreBoard.textContent = computerScore
        } else {
            result.textContent = "Player Won the round"
            playerScore++
            playerScoreBoard.textContent = playerScore
        }
    }
}

function butClicked(text) {
    
    if (laps > 1) {
        playerOutcome.textContent = text
        laps -= 1
        movesLeft.innerText = laps
        gameoutput()
    } else
        gameEnding()
}

function gameEnding() {
    movesLeft.innerText = "game Over!"
    if (playerScore > computerScore) 
        result.innerText = "You Won The Game!"
    else if (playerScore < computerScore) 
        result.innerText = "You Lost The Game!"
    else 
        result.innerText = "the game is a Tie"
}