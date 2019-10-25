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

    document.getElementById('digital').textContent = getDigital(hours, minutes, seconds);
    
    // Log time every 5 minutes
    if ((minutes % 5 == 0) && (seconds == 0)) {
        console.log("Logged > " + getDigital(hours, minutes, seconds));
    }
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

// return digital format of time
function getDigital(hours, minutes, seconds) {
        // convert hours to 12-hr format
        var ampm = hours >= 12 ? 'PM' : 'AM'; // set AM or PM
        hours = hours % 12; // convert to 12 hr format
        hours = hours ? hours : 12; // 'zero' o' clock should be '12'
        var time = ((('0' + hours).slice(-2)) + ":" + (('0' + minutes).slice(-2)) + ":" + (('0' + seconds).slice(-2)) + " " + ampm);
        return time;
}

setInterval(setDate, 1000);