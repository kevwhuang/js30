const background = document.querySelector('.dropdownBackground');

document.querySelectorAll('.modal > li').forEach(trigger => {
    trigger.addEventListener('mouseenter', handleEnter);
    trigger.addEventListener('mouseleave', handleLeave);
});

function handleEnter() {
    this.classList.add('trigger-enter');
    background.classList.add('open');

    setTimeout(() => {
        return this.classList.contains('trigger-enter')
            && this.classList.add('trigger-enter-active')
    }, 100);

    const dropdownCoords = this.querySelector('.dropdown').getBoundingClientRect();
    const navCoords = document.querySelector('.top').getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        left: dropdownCoords.left - navCoords.left + window.scrollX,
        top: dropdownCoords.top - navCoords.top + window.scrollY,
        width: dropdownCoords.width,
    };

    background.style.height = `${coords.height}px`;
    background.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    background.style.width = `${coords.width}px`;
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}
