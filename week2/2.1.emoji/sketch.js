function setup() {
  createCanvas(400, 400);
}
// the face
function draw() {
  background(220);
  fill("yellow");
  stroke("black");
  circle(200,200,300);

  //the mouth
  fill("#000000");
  stroke("#000000");
  strokeWeight(1);
  ellipse(200,250,100,100);

  //the eyes
  fill("#000000");
  strokeWeight("20");
  ellipse(150,155,45,45);

  fill("#000000");
  strokeWeight("20");
  ellipse(250,155,45,45);
  


}