const bands = [
    'A Skylit Drive',
    'An Old Dog',
    'Anywhere But Here',
    'Counterparts',
    'Norma Jean',
    'Oh, Sleeper',
    'Pierce the Veil',
    'Say Anything',
    'The Bled',
    'The Devil Wears Prada',
    'The Midway State',
    'The Plot in You',
    'We Came as Romans',
];

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');

function strip(bandName) {
    return bandName.replace(/^(a|the|an) /i, '');
}
