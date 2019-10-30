let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // clear any existing timers
    clearInterval(countdown);

    const now = Date.now(); // get current timestamp
    const then = now + (seconds * 1000); // where the time should end up at
    displayTimeLeft(seconds);
    displayEndTIme(then);
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            // countdown is DONE!!!
            clearInterval(countdown);
            document.title = 'Countdown Timer';
            return;
        }
        // log it
        displayTimeLeft(secondsLeft);
    }, 1000);
}

// show the time left on screen
function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = 'Time Remaining: ' + display;
    timerDisplay.textContent = display;
}

// display what time countdown will finish
function displayEndTIme(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back Around: ${adjHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

// get value from button and start the timer
function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

// make each button work, have them set a timer
buttons.forEach(button => button.addEventListener('click', startTimer));

// use custom value for timer
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});