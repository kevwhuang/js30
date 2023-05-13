const manifest = [
    '01-drum-kit',
    '02-clock',
    '03-variables',
    '04-array-cardio-1',
    '05-flex-gallery',
    '06-ajax-type-ahead',
    '07-array-cardio-2',
    '08-canvas',
    '09-dev-tools',
    '10-checkboxes',
    '11-video-player',
    '12-key-detection',
    '13-scroll-animation',
    '14-objects',
    '15-local-storage',
    '16-text-shadow',
    '17-sorting',
    '18-tally',
    '19-webcam',
    '20-speech-recognition',
    '21-geolocation',
    '22-links',
    '23-speech-synthesis',
    '24-sticky-nav',
    '25-events',
    '26-dropdown',
    '27-click-scroll',
    '28-video-speed',
    '29-countdown',
    '30-whack-a-mole',
];

let pos;

function back5() {
    typeof pos !== 'number' ? pos = manifest.length - 5 : pos -= 5;
    if (pos < 0) pos += manifest.length;

    document.querySelector('iframe').title = `html/${manifest[pos]}.html`;
    document.querySelector('iframe').src = `html/${manifest[pos]}.html`;
    document.querySelector('h1').textContent = `${manifest[pos].replaceAll('-', ' ')}`;
}

function back() {
    typeof pos !== 'number' ? pos = manifest.length - 1 : pos -= 1;
    if (pos < 0) pos = manifest.length - 1;

    document.querySelector('iframe').title = `html/${manifest[pos]}.html`;
    document.querySelector('iframe').src = `html/${manifest[pos]}.html`;
    document.querySelector('h1').textContent = `${manifest[pos].replaceAll('-', ' ')}`;
}

function forward() {
    typeof pos !== 'number' ? pos = 0 : pos += 1;
    if (pos > manifest.length - 1) pos = 0;

    document.querySelector('iframe').title = `html/${manifest[pos]}.html`;
    document.querySelector('iframe').src = `html/${manifest[pos]}.html`;
    document.querySelector('h1').textContent = `${manifest[pos].replaceAll('-', ' ')}`;
}

function forward5() {
    typeof pos !== 'number' ? pos = 4 : pos += 5;
    if (pos > manifest.length - 1) pos -= manifest.length;

    document.querySelector('iframe').title = `html/${manifest[pos]}.html`;
    document.querySelector('iframe').src = `html/${manifest[pos]}.html`;
    document.querySelector('h1').textContent = `${manifest[pos].replaceAll('-', ' ')}`;
}
