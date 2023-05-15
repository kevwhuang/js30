const recognition = new webkitSpeechRecognition();
const words = document.querySelector('.words');

let p = document.createElement('p');

recognition.interimResults = true;
recognition.lang = 'en-US';

recognition.addEventListener('end', recognition.start);
recognition.addEventListener('result', handleSpeech);
recognition.start();
words.appendChild(p);

function handleSpeech(e) {
    p.textContent = Array.from(e.results)
        .map(result => result[0].transcript)
        .join('')
        .replace(/poo|poop/g, '💩 ');

    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
}
