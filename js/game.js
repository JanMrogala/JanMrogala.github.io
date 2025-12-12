document.addEventListener('DOMContentLoaded', () => {
    // Get the canvas element
    const canvas = document.getElementById('gameCanvas');

    // Get the 2D rendering context
    const ctx = canvas.getContext('2d');
    let RUNNING = true

    // Set the initial position of the rectangle
    let x = 50;
    let y = 50;
    let currentCommands = new Set();
    let commandResponse = new Map();

    // Set the size and speed of the rectangle
    const fps = 45;
    const char_width = 50;
    const char_height = 50;
    const speed = 5;

    commandResponse.set('ArrowUp', moveUP);
    commandResponse.set('ArrowDown', moveDOWN);
    commandResponse.set('ArrowLeft', moveLEFT);
    commandResponse.set('ArrowRight', moveRIGHT);

    // Draw the rectangle at the initial position
    function drawRectangle() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx.fillStyle = 'blue';
        ctx.fillRect(x, y, char_width, char_height); // Draw the rectangle
    }

    function registerCommand(event) {
        currentCommands.add(event.key)
    }

    function unregisterCommand(event) {
        currentCommands.delete(event.key)
    }

    // Update the position of the rectangle based on keyboard input
    function moveUP() {
        y = Math.max(0, y - speed);
    }

    function moveDOWN() {
        y = Math.min(canvas.height - char_height, y + speed);
    }

    function moveLEFT() {
        x = Math.max(0, x - speed);
    }

    function moveRIGHT() {
        x = Math.min(canvas.width - char_width, x + speed);
    }

    function gameLoop() {

        for (const cmd of currentCommands) {
            commandResponse.get(cmd)(cmd);
        }

        drawRectangle();
    }

    // Add keyboard event listener to move the rectangle
    document.addEventListener('keydown', registerCommand);
    document.addEventListener('keyup', unregisterCommand);

    setInterval(gameLoop, 1000 / fps);
});
