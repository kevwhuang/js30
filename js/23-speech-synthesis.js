const msg = new window.SpeechSynthesisUtterance();
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
const voicesDropdown = document.querySelector('[name="voice"]');

let voices = [];

msg.text = document.querySelector('[name="text"]').value;

options.forEach(option => option.addEventListener('change', setOptions));
speakButton.addEventListener('click', togglePlayback);
speechSynthesis.addEventListener('voiceschanged', populateVoices);
stopButton.addEventListener('click', () => togglePlayback(false));
voicesDropdown.addEventListener('change', setVoice);

function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
}

function setOptions() {
    msg[this.name] = this.value;
    togglePlayback();
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    togglePlayback();
}

function togglePlayback(restart = true) {
    speechSynthesis.cancel();
    restart && speechSynthesis.speak(msg);
}
