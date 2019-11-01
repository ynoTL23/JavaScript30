const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;

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
        peep();
    }, time)
}

peep();