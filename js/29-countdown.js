const buttons = document.querySelectorAll('[data-time]');
const form = document.customForm;
const endTime = document.querySelector('.display__end-time');
const timerDisplay = document.querySelector('.display__time-left');

let countdown;

buttons.forEach(button => button.addEventListener('click', startTimer));

form.addEventListener('submit', e => {
    const mins = form.minutes.value;

    e.preventDefault();
    form.reset();
    timer(mins * 60);
});

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();

    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

    document.title = display;
    timerDisplay.textContent = display;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);

    timer(seconds);
}

function timer(seconds) {
    const then = Date.now() + seconds * 1000;

    clearInterval(countdown);
    displayEndTime(then);
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}
