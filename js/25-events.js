document.querySelectorAll('div').forEach(div =>
    div.addEventListener('click', logText, {
        capture: false,
        once: false,
    }));

function logText(e) {
    e.stopPropagation();
    console.log(this);
}
