const nav = document.getElementById('main');
let topOfNav = nav.offsetTop;

window.addEventListener('scroll', stickyNav);

function stickyNav() {
    if (scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = `${nav.offsetHeight}px`;
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}
