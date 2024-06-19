<canvas id="canvas" width="400" height="400"></canvas>
const canvas = documen.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 400;
canvas.height = 400;

// Function to generate a random color
function gerRandomColor() {
    return `#${Math.floor(Math.random() *
16777215). toString(16)}`;
}

// Draw the circle pattern
for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 50;
    const color = getRandomColor();

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill()
}