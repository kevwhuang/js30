let debounce = null;

window.addEventListener('scroll', () => {
    clearTimeout(debounce);
    debounce = setTimeout(slide, 100);
});

function slide() {
    document.querySelectorAll('.slide-in').forEach(image => {
        const imageBottom = image.offsetTop + image.height;
        const slideInAt = window.scrollY + window.innerHeight - image.height / 2;

        if (slideInAt > image.offsetTop && window.scrollY < imageBottom) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}
