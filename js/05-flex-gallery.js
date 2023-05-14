const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function toggleActive(e) {
    e.propertyName.includes('flex') && this.classList.toggle('open-active');
}

function toggleOpen() {
    this.classList.toggle('open');
}
