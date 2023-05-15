const boxes = document.querySelectorAll('input');
let lastIndex;

boxes.forEach(box => box.addEventListener('click', handleCheck));

function handleCheck(e) {
    if (!this.checked) return;

    let currentIndex;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].nextElementSibling === this.nextElementSibling) {
            currentIndex = i;
            break;
        }
    }

    if (e.shiftKey) {
        for (let i = Math.min(currentIndex, lastIndex); i < Math.max(currentIndex, lastIndex); i++) {
            boxes[i].checked = true;
        }
    }

    lastIndex = currentIndex;
}
