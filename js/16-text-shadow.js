const WALK = 500;
const hero = document.querySelector('.hero');
const text = hero.querySelector('.hero h1');

hero.addEventListener('mousemove', shadow);

function shadow(e) {
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round(x / hero.offsetWidth * WALK - WALK / 2);
    const yWalk = Math.round(y / hero.offsetHeight * WALK - WALK / 2);

    hero.querySelector('.hero h1').style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, .7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, .7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, .7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, .7)
    `;
}
