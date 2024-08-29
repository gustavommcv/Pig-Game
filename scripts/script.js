// Buttons
const newGameButton = document.querySelector('.ng');
const rowDiceButton = document.querySelector('.roll');
const holdButton = document.querySelector('.hold');

// Elements
const player1Section = document.querySelector('.player1');
const currentSection1 = document.querySelector('.section-current.player-1');
const currentScorePlayer1HTML = document.querySelector('.current-number.player-1');
const totalScorePlayer1HTML = document.querySelector('.number.player-1');

const player2Section = document.querySelector('.player2');
const currentSection2 = document.querySelector('.section-current.player-2');
const currentScorePlayer2HTML = document.querySelector('.current-number.player-2');
const totalScorePlayer2HTML = document.querySelector('.number.player-2');

const dice = document.querySelector('.dice');

const winnerSection = document.querySelector('div.winner');
const winnerPlayer = document.querySelector('span.winner');

// Players Score
let currentScorePlayer1 = 0;
let currentScorePlayer2 = 0;

let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;

// Dice Number
let diceNumber;

// New game Button
newGameButton.addEventListener('click', () => {
    resetGame();
});

// Hold Button
holdButton.addEventListener('click', () => {
    if (player1Section.classList.contains('active')) { 
        totalScorePlayer1 += currentScorePlayer1;
        totalScorePlayer1HTML.textContent = totalScorePlayer1;
    }

    if (player2Section.classList.contains('active')) { 
        totalScorePlayer2 += currentScorePlayer2;
        totalScorePlayer2HTML.textContent = totalScorePlayer2;
    }

    checkWinner();
    changeCurrentPlayer();
});

// Row Dice Button
rowDiceButton.addEventListener('click', () => {
    diceNumber = randomIntFromInterval(1, 6);

    dice.style.backgroundImage = `url('./imgs/${diceNumber}.png')`;

    if (dice.style.display == 'none') { dice.style.display = 'block' }

    if (player1Section.classList.contains('active')) {
        currentScorePlayer1 += diceNumber;
        currentScorePlayer1HTML.textContent = currentScorePlayer1;

        if (diceNumber == 1) {
            changeCurrentPlayer();
            return;
        }
    } 

    if (player2Section.classList.contains('active')) {
        currentScorePlayer2 += diceNumber;
        currentScorePlayer2HTML.textContent = currentScorePlayer2;

        if (diceNumber == 1) { 
            changeCurrentPlayer(); 
            return;
        }
    }
});

function changeCurrentPlayer() {

    if (player1Section.classList.contains('active')) {
        currentScorePlayer1 = 0;
        currentScorePlayer1HTML.textContent = 0;
    }

    if (player2Section.classList.contains('active')) {
        currentScorePlayer2 = 0;
        currentScorePlayer2HTML.textContent = 0;
    }

    player1Section.classList.toggle('active');
    currentSection1.classList.toggle('active');

    player2Section.classList.toggle('active');
    currentSection2.classList.toggle('active');
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function resetGame() {

    dice.style.display = 'none';

    currentScorePlayer1 = 0;
    currentScorePlayer2 = 0;

    totalScorePlayer1 = 0;
    totalScorePlayer2 = 0;

    totalScorePlayer1HTML.textContent = 0;
    totalScorePlayer2HTML.textContent = 0;

    currentScorePlayer1HTML.textContent = 0;
    currentScorePlayer2HTML.textContent = 0;

    winnerSection.classList.remove('active');
    winnerPlayer.textContent = '';

    if (player2Section.classList.contains('active')) {
        player1Section.classList.toggle('active');
        currentSection1.classList.toggle('active');

        player2Section.classList.toggle('active');
        currentSection2.classList.toggle('active');
    }
}

function checkWinner() {
    if (totalScorePlayer1 >= 100) {
        winnerSection.classList.toggle('active');
        winnerPlayer.textContent = '1';
    }

    if (totalScorePlayer2 >= 100) {
        winnerSection.classList.add('active');
        winnerPlayer.textContent = '2';
    }
}
