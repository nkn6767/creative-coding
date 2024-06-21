let poem = '';

let grammar = tracery.createGrammar({
"origin": ["A HOUSE OF #spleck#"],
"material" : ["MUD" ,"BRICKS", "LEAVES", "WEEDS", "STEEL"]
});

function setup() {
  createCanvas(800, 800);
  frameRate(0.5);
}

function draw() {
  background(220);
  poem = grammar.flatten("origin");
  textFont("Impact");
  textSize(50);
  text(poem,70,200);
}