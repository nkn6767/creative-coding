// Artist's Statement:
// For this project, I aimed to create an interactive  landscape that combines 3D graphics and audio to create an immersive experience. Inspired by the beauty of nature and the complexity of digital art, I wanted to explore how simple shapes and randomness can generate intricate and dynamic landscapes. The interactive elements allow users to contribute to the artwork, making each experience unique. This project demonstrates the potential of creative coding to blend technology and art in innovative ways, pushing the boundaries of how we perceive digital landscapes.

let img;
let song;

function preload() {
  // Load an image and audio file
  //  https://p5js.org/reference/#/p5/loadImage
  img = loadImage('https://path-to-your-image.jpg'); // Use a real image URL
  //  https://p5js.org/reference/#/p5/loadSound
  // https://www.youtube.com/watch?v=-e7PTGhVR0I
  song = loadSound('https://www.bensound.com/bensound-music/bensound-summer.mp3'); // Use a real audio URL
}

function setup() {
  // https://p5js.org/reference/#/p5/createCanvas
  createCanvas(800, 800, WEBGL); // Create a 3D canvas
  noStroke();
  song.loop(); // Loop the background music
}

function draw() {
  background(200);

  // Rotate the entire scene
  // https://p5js.org/reference/#/p5/rotateY
  rotateY(frameCount * 0.01);

  // Generate the landscape
  for (let i = -400; i < 400; i += 20) {
    for (let j = -400; j < 400; j += 20) {
      push();
      // https://p5js.org/reference/#/p5/noise
      let h = map(noise(i * 0.05, j * 0.05, frameCount * 0.01), 0, 1, -100, 100);
      translate(i, h, j);
      // https://p5js.org/reference/#/p5/ambientMaterial
      ambientMaterial(150, 150, 250);
      //  https://p5js.org/reference/#/p5/box
      box(20, h * 2, 20);
      pop();
    }
  }

  // Add interactive elements
  if (mouseIsPressed) {
    push();
    translate(mouseX - width / 2, -100, mouseY - height / 2);
    fill(random(255), random(255), random(255));
    // https://p5js.org/reference/#/p5/sphere
    sphere(30);
    pop();
  }
}

// Handle mouse interaction
function mousePressed() {
  // Generate new elements on mouse click
  let x = mouseX - width / 2;
  let y = mouseY - height / 2;
  let z = random(-400, 400);
  push();
  translate(x, y, z);
  fill(random(255), random(255), random(255));
  sphere(30);
  pop();
}
