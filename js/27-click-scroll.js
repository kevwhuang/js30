const slider = document.querySelector('.items');

let isDown = false;
let scrollLeft = 0;
let startX = 0;

slider.addEventListener('mousedown', handleMouseDown);
slider.addEventListener('mouseleave', handleMouseLeave);
slider.addEventListener('mousemove', handleMouseMove);
slider.addEventListener('mouseup', handleMouseLeave);

function handleMouseDown(e) {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

function handleMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    slider.scrollLeft = scrollLeft - (e.pageX - slider.offsetLeft - startX) * 2;
}

function handleMouseLeave() {
    isDown = false;
    slider.classList.remove('active');
}
