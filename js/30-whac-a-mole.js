const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score');

let lastHole = null;
let score = 0;
let timeUp = false;

moles.forEach(mole => mole.addEventListener('click', pound));

function peep() {
    const hole = randomHole(holes);

    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, randomTime(500, 1000));
}

function pound(e) {
    if (!e.isTrusted) return;
    score++;
    scoreBoard.textContent = score;
    this.parentNode.classList.remove('up');
}

function randomHole(holes) {
    const hole = holes[Math.floor(Math.random() * holes.length)];

    if (hole === lastHole) return randomHole(holes);
    else lastHole = hole;
    return hole;
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function startGame() {
    score = 0;
    scoreBoard.textContent = 0;
    timeUp = false;
    peep();
    setTimeout(() => timeUp = true, 60e3);
}
