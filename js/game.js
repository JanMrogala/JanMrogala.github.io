document.addEventListener('DOMContentLoaded', () => {
    // Get the canvas element
    const canvas = document.getElementById('gameCanvas');

    // Get the 2D rendering context
    const ctx = canvas.getContext('2d');

    // Set the initial position of the rectangle
    let x = 50;
    let y = 50;

    // Set the size and speed of the rectangle
    const width = 50;
    const height = 50;
    const speed = 5;

    // Draw the rectangle at the initial position
    function drawRectangle() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx.fillStyle = 'blue';
        ctx.fillRect(x, y, width, height); // Draw the rectangle
    }

    // Update the position of the rectangle based on keyboard input
    function moveRectangle(event) {
        switch (event.key) {
            case 'ArrowUp':
                y -= speed;
                break;
            case 'ArrowDown':
                y += speed;
                break;
            case 'ArrowLeft':
                x -= speed;
                break;
            case 'ArrowRight':
                x += speed;
                break;
        }
        drawRectangle(); // Redraw the rectangle at the new position
    }

    // Add keyboard event listener to move the rectangle
    document.addEventListener('keydown', moveRectangle);

    // Draw the initial rectangle
    drawRectangle();
});
