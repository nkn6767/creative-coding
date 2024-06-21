let poem = '';

let grammar = tracery.createGrammar({
  "origin": "A HOUSE OF #material#\n#place#\nUSING #light_source#\nINHABITED BY #inhabitants#",
  "material": ["MUD", "BRICKS", "LEAVES", "WEEDS", "STEEL"],
  "place": ["IN A FOREST", "BY THE SEA", "ON A MOUNTAIN", "IN A VALLEY", "IN A DESERT"],
  "light_source": ["SUNLIGHT", "MOONLIGHT", "CANDLES", "ELECTRIC LIGHTS", "STARS"],
 
});

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(220);
  textFont("Impact");
  textSize(24);
  let y = 50;
  for (let i = 0; i < 4; i++) {
    poem = grammar.flatten("#origin#");
    text(poem, 70, y);
    y += 150; // spacing for each quatrain
  }
}
