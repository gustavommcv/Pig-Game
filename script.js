'use strict';

const dice = document.querySelector('.dice');
dice.classList.add('hidden');

let score, currentScore, activePlayer, playing;

const init = function () {
    dice.classList.add('hidden');

    playing = true;

    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;

    document.querySelector(`.player--${0}`).classList.add('player--active');
    document.querySelector(`.player--${1}`).classList.remove('player--active');

    document.querySelector(`.player--${0}`).classList.remove('player--winner');
    document.querySelector(`.player--${1}`).classList.remove('player--winner');

    document.getElementById(`current--${0}`).textContent = 0;
    document.getElementById(`current--${1}`).textContent = 0;

    document.getElementById(`score--${0}`).textContent = 0;
    document.getElementById(`score--${1}`).textContent = 0;
}

init();

const rollDiceButton = document.querySelector('.btn--roll').addEventListener('click', function () {
    if (playing) {
        dice.classList.remove('hidden');

        const n = rollDice();
        dice.src = `dice-${n}.png`;

        if (n != 1) {
            currentScore += n;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            
            switchPlayer();
        }
    }
});

const holdButton = document.querySelector('.btn--hold').addEventListener('click', function () {
    if (playing) {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

        if (score[activePlayer] >= 100) {
            dice.classList.add('hidden');
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        } else {
            switchPlayer();
        }
    }
});

const newButton = document.querySelector('.btn--new').addEventListener('click', init);

function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}

function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    
    let otherPlayer = activePlayer == 0 ? 1 : 0;

    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
    document.querySelector(`.player--${otherPlayer}`).classList.toggle('player--active');

    activePlayer = otherPlayer;
}
