function setup() {
    // Setting up the canvas with an appropriate aspect ratio
    let canvasWidth = 800;
    let canvasHeight = 1200;
    createCanvas(canvasWidth, canvasHeight);
    background('#beb5a7'); // Set the background color to match the paper
    noLoop(); // No continuous looping
}

function draw() {
    // Number of squares to draw
    let numSquares = 10; 
    let minSize = 50; // Minimum size of the squares
    let maxSize = 600; // Maximum size of the squares
    let centerX = width / 2;
    let centerY = height / 2;

    stroke(0); // Set stroke color to black
    noFill(); // No fill for the squares

    // Loop to draw each square
    for (let i = 0; i < numSquares; i++) {
        // Calculate size of the square
        let size = map(i, 0, numSquares - 1, minSize, maxSize);
        
        // Random displacements for each square
        let offsetX = random(-20, 20);
        let offsetY = random(-20, 20);
        
        // Draw the square
        rectMode(CENTER);
        rect(centerX + offsetX, centerY + offsetY, size, size);
    }
}
