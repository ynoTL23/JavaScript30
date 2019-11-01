const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

// generate random time from min to max, in milliseconds
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// pick a random hole
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    // prevent the same hole being picked consecutively
    if (hole == lastHole) {
        console.log('Picked the same hole. Trying again...');
        randomHole(holes);
    }
    lastHole = hole; // track previous hole to prevent consecutively picking same hole
    return hole;
}

// make the mole pop up
function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up'); // mole comes up
    setTimeout(() => {
        hole.classList.remove('up'); // mole goes down after 'time' milliseconds
        if (!timeUp) peep();
    }, time)
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => {
        timeUp = true;
        console.log("10 seconds have elapsed. Game over.");
    }, 10000);
}

function bonk(e) {
    if (!e.isTrusted) return; // click is faked. Dev console???
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
    console.log(`[${score}] | You got a mole! Score increased.`);
}

moles.forEach(mole => mole.addEventListener('click', bonk));