// Buttons
const newGameButton = document.querySelector('.ng');
const rowDiceButton = document.querySelector('.row');
const holdButton = document.querySelector('.hold');

// Elements
const player1Section = document.querySelector('.player1');
const currentSection1 = document.querySelector('.section-current.player-1');

const player2Section = document.querySelector('.player2');
const currentSection2 = document.querySelector('.section-current.player-2');

holdButton.addEventListener('click', () => {
    changeCurrentPlayer();
});

function changeCurrentPlayer() {
    player1Section.classList.toggle('active');
    currentSection1.classList.toggle('active');

    player2Section.classList.toggle('active');
    currentSection2.classList.toggle('active');

    console.log('teste')
}
