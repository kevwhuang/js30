const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.appendChild(highlight);
document.querySelectorAll('a').forEach(a => a.addEventListener('mouseenter', highlightLink));

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();

    const coords = {
        height: linkCoords.height,
        left: linkCoords.left + window.scrollX,
        top: linkCoords.top + window.scrollY,
        width: linkCoords.width,
    };

    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    highlight.style.width = `${coords.width}px`;
}
