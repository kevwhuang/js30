const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const ghost = document.querySelector('span');
const snap = document.querySelector('audio');
const strip = document.querySelector('.strip');
const video = document.querySelector('.player');

navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then(localMediaStream => {
        video.srcObject = localMediaStream;
        video.play();
    });

document.querySelector('button').addEventListener('click', takePhoto);
ghost.addEventListener('click', toggleEffect);
video.addEventListener('canplay', paintToCanvas);

function paintToCanvas() {
    const height = video.videoHeight;
    const width = video.videoWidth;

    canvas.height = height;
    canvas.width = width;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);

        if (ghost.classList.contains('active')) {
            ctx.globalAlpha = .05;
            ctx.putImageData(photoEffect(ctx.getImageData(0, 0, width, height)), 0, 0);
        } else {
            ctx.globalAlpha = 1;
            ctx.putImageData(ctx.getImageData(0, 0, width, height), 0, 0);
        }
    }, 10);
}

function photoEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 200] = pixels.data[i + 0];
        pixels.data[i + 600] = pixels.data[i + 1];
        pixels.data[i - 800] = pixels.data[i + 2];
    }

    return pixels;
}

function takePhoto() {
    const data = canvas.toDataURL('image/png');
    const link = document.createElement('a');

    snap.currentTime = 0;
    snap.play();

    link.href = data;
    link.innerHTML = `<img src="${data}">`;
    link.setAttribute('download', Date.now());
    strip.insertBefore(link, strip.firstChild);
}

function toggleEffect(e) {
    e.target.classList.contains('active')
        ? e.target.classList.remove('active')
        : e.target.classList.add('active');
}
