function setup() {
  createCanvas(800, 800); // Create a canvas of 800x800 pixels
  noStroke(); // No outline for the shapes
}

function draw() {
  background(220); // Light grey background

  // Number of circles to draw
  let numCircles = 50; 

  // Loop to draw each circle
  for (let i = 0; i < numCircles; i++) {
    let x = random(width); // Random x position within canvas width
    let y = random(height); // Random y position within canvas height
    let size = random(10, 100); // Random size for each circle between 10 and 100
    let r = random(255); // Random red value
    let g = random(255); // Random green value
    let b = random(255); // Random blue value
    fill(r, g, b, 150); // Set fill color with random RGB and alpha for transparency

    ellipse(x, y, size, size); // Draw the circle
  }
}
