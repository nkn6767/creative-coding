let ripple_x = 0;
let ripple_y = 0;
let ripple_d = 50;
let ripplers = [];

class Rippler {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.d = 0;
  }

  draw() {
    this.d += 1;  // Increase the diameter to create the ripple effect
    circle(this.x, this.y, this.d);
  }
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0, 105, 148);  // Set background color to resemble a pool
  stroke("white");
  strokeWeight(5);
  noFill();

  // Draw each ripple
  for (let i = 0; i < ripplers.length; i++) {
    ripplers[i].draw();
  }
}

function mousePressed() {
  ripple_x = mouseX;
  ripple_y = mouseY;
  ripple_d = 0;

  // Add a new ripple at the mouse position
  ripplers.push(new Rippler(mouseX, mouseY));
}
