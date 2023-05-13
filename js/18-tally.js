const seconds = Array.from(document.querySelectorAll('[data-time]'))
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);

        return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
const total = `Total runtime: ${transform(hours)}:${transform(mins)}:${transform(secondsLeft)}`;

const ele = document.createElement('li');
ele.textContent = total;

document.querySelector('.videos')
    .insertBefore(ele, document.querySelector('.videos').children[0]);

function transform(input) {
    return input.toString().padStart(2, 0);
}
