const player = document.querySelector('.player');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');
const toggle = player.querySelector('.toggle');
const video = player.querySelector('.viewer');

let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mousemove', e => mousedown && scrub(e));
progress.addEventListener('mouseup', () => mousedown = false);
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
skipButtons.forEach(button => button.addEventListener('click', skip));
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);
video.addEventListener('timeupdate', handleProgress);

function handleProgress() {
    progressBar.style.flexBasis = `${100 * video.currentTime / video.duration}%`;
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function scrub(e) {
    video.currentTime = video.duration * e.offsetX / progress.offsetWidth;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function togglePlay() {
    video[video.paused ? 'play' : 'pause']();
}

function updateButton() {
    toggle.textContent = this.paused ? '►' : '❚ ❚';
}
