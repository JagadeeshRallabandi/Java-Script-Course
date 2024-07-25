const emojis = ['😈', '😈', '🐱', '🐱', '🐶', '🐶', '🐰', '🐰', '🦊', '🦊', '🐻', '🐻', '🐼', '🐼', '🐨', '🐨'];
let shuffledEmojis = shuffle(emojis);
const gameBoard = document.getElementById('game-board');

shuffledEmojis.forEach(emoji => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="inner-card">
            <div class="front">${emoji}</div>
            <div class="back">{}</div>
        </div>
    `;
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
});

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.querySelector('.front').innerHTML === secondCard.querySelector('.front').innerHTML;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
