const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let direction = true;
let hue = 0;
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 1;

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mouseup', () => isDrawing = false);

canvas.addEventListener('mousedown', e => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

function draw(e) {
    if (!isDrawing) return;

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    hue++;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    if (hue >= 360) hue = 0;
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
    direction ? ctx.lineWidth++ : ctx.lineWidth--;
}
