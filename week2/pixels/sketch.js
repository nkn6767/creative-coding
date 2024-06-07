let img;
let sampleX = 10;
let sampleY = 10;

function preload(){
  img = loadImage('https://nkn6767.github.io/creative-coding/week2/pixels/spleck%20cover%20art%20fr.jpg');
}

function setup() {
  createCanvas(800, 800);
  img.loadPixels();
  noLoop(); 
}

function draw() {
  background(220);
  let hexSize = sampleX;
  let hexHeight = hexSize * sqrt(3) / 2;

  translate(200, 100);

  for(let y = 0; y <= img.height; y += hexHeight) {
    for(let x = 0; x <= img.width; x += hexSize * 1.5) {
      let offsetY = (y / hexHeight) % 2 == 0 ? 0 : hexSize * 0.75;
      let index = (int(x + offsetY) + int(y) * img.width) * 4;

      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      fill(r, g, b);
      drawHexagon(x + offsetY, y, hexSize);
    }
  }
}

function drawHexagon(x, y, radius) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let xOffset = radius * cos(angle);
    let yOffset = radius * sin(angle);
    vertex(x + xOffset, y + yOffset);
  }
  endShape(CLOSE);
}
