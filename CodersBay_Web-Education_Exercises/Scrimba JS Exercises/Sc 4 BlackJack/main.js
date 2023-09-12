let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
/* let sumEl = document.getElementById("sum-el") */
let sumEl = document.querySelector("#sum-el")   //broarder expression so you have to specify it it is a id #, 
let cardsEl = document.getElementById("cards-el") //we can change it to class and you dot.

function startGame(){
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] +" - "+ cards[1]
    sumEl.textContent = "Sum: "+ sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }   
    messageEl.textContent = message
}

function newCard (){
    let card = 3
    sum += card
    renderGame()
}

