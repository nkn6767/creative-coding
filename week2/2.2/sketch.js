function setup() {
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  background(220);
  translate(150,100);
  for (let x = 0; x < 8; x++){

    for (let y = 0; y < 8; y++){
      push();



      translate(x * 115, y * 115);

      strokeWeight(8);
      stroke( random(12,523,216));
      ellipse(0,0,100,);

      pop();


   }

}
}