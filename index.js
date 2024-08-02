let player={
    name: "Per",
    chips: 250
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let startBtn = document.querySelector("#start-btn")
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let nextCards = document.querySelector("#next-cards")
let playerEl= document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

startBtn.addEventListener("click", startGame)

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
     sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum

     if (sum <= 20) {
    message = "Do you want to draw a new card? "
    } else if (sum === 21) {
    message = "You've got Blackjack! "
    hasBlackJack = true
    } else {
    message = "You're out of the game! "
    isAlive = false
    }
    messageEl.textContent= message
}

nextCards.addEventListener("click", newCard)

function newCard(){
    //console.log("Drawing a new card from the deck!")
    
    if ( isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
