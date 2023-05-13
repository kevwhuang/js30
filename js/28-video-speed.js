const bar = document.querySelector('.speed .speed-bar');
const speed = document.querySelector('.speed');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', handleMove);

function handleMove(e) {
    const max = 4;
    const min = .4;
    const percent = (e.pageY - this.offsetTop) / this.offsetHeight;
    const playbackRate = percent * (max - min) + min;

    bar.style.height = `${Math.round(percent * 100)}%`;
    bar.textContent = `${playbackRate.toFixed(2)}x`;
    video.playbackRate = playbackRate;
}
