let x = 0;
let y = 0;
let xspeed = 5;
let yspeed = 5;
function setup() {
  createCanvas(400, 300);
  fill("orange");

}

function draw() {
  background(220);
  
  translate(width / 2, height / 2);

  ellipse(x,y,50);

  

  if(x > 175 | x < -175){
    xspeed = -xspeed;
    fill(random(255),100,100);
 }

  if(y > 125 | y < -125){
    yspeed = -yspeed;
    fill(random(255),100,100);
 }
  y+= yspeed;
  x+= xspeed; 
    // y += 1; 
}