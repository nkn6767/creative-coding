/*
Artist's Statement:

In this project, my goal was to explore the randomness and beauty that can emerge from simple shapes and colors. 
The inspiration for this piece came from the natural world, where patterns and colors often appear in unexpected yet harmonious ways. 
By using p5.js, I wanted to replicate this phenomenon through code, creating a digital artwork that continuously evolves and surprises the viewer.

 
*/

function setup() {
  createCanvas(800, 800); 
  noStroke(); 
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
