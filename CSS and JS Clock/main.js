
function setDate() {
    const now = new Date();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hoursDegrees = ((hours / 12) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    checkIfSecondsResets(seconds);

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

}

// prevent snapping of hands when seconds reaches 60/0
function checkIfSecondsResets(seconds) {
    const hands = document.querySelectorAll('.hand');
    if (seconds == 0) {
        hands.forEach(hand => hand.style.transitionDuration = '0s');
    } else {
        hands.forEach(hand => hand.style.transitionDuration = '0.05s');
    }
}

setInterval(setDate, 1000);