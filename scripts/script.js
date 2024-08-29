// Buttons
const newGameButton = document.querySelector('.ng');
const rowDiceButton = document.querySelector('.row');
const holdButton = document.querySelector('.hold');

// Elements
const player1Section = document.querySelector('.player1');
const currentSection1 = document.querySelector('.section-current.player-1');

const player2Section = document.querySelector('.player2');
const currentSection2 = document.querySelector('.section-current.player-2');

const dice = document.querySelector('.dice');

// Players Score
let currentScorePlayer1 = 0;
let currentScorePlayer2 = 0;

let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;

// Dice Number
let diceNumber;

// Hold Button
holdButton.addEventListener('click', () => {
    changeCurrentPlayer();
});

// Row Dice Button
rowDiceButton.addEventListener('click', () => {
    diceNumber = randomIntFromInterval(1, 6);

    dice.style.backgroundImage = `url('../imgs/${diceNumber}.png')`;

    if (diceNumber == 1) {
        changeCurrentPlayer();
    }
});

function changeCurrentPlayer() {
    player1Section.classList.toggle('active');
    currentSection1.classList.toggle('active');

    player2Section.classList.toggle('active');
    currentSection2.classList.toggle('active');
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
