let debug = true;
let x = 0;
let y = 0;
let d = 0;
let score = 0;  // Initial score set to 0
let speedfactor = 3;
let speedx = speedfactor;
let speedy = speedfactor;
let goalx = 0;
let goaly = 0;

function setup() {
  createCanvas(800, 800);

  x = random(width);
  y = random(height);

  goalx = random(width);
  goaly = random(height);
}

function draw() {
  background(220);

  rect(goalx, goaly, 20, 20);

  d = sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);

  x += speedx;
  y += speedy;

  circle(x, y, 50);

  if (mouseX > x) {
    speedx = speedfactor;
  } else {
    speedx = -speedfactor;
  }

  if (mouseY > y) {
    speedy = speedfactor;
  } else {
    speedy = -speedfactor;
  }

  // If the distance between the sprite and the mouse is less than 25, decrease the score by 1
  if (d < 25) {
    score -= 1;  // Decrease the score by 1
    x = random(width);  // Move the sprite to a new random position
    y = random(height);  // Move the sprite to a new random position
  }

  if (debug) {
    textSize(30);
    text("mouseX: " + mouseX, 50, 50);
    text("mouseY: " + mouseY, 50, 80);
    text("x: " + x, 50, 120);
    text("y: " + y, 50, 150);
    text("d: " + d, 50, 180);
    text("score: " + score, 50, 210);  // Display the score
  }
}
