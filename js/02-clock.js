const hourHand = document.querySelector('.hour-hand');
const minsHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

setDate();
setInterval(setDate, 1000);

function setDate() {
    const now = new Date();

    const hour = now.getHours();
    const mins = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}
