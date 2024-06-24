/*
  This is a p5.js sketch that creates a book by repeating some
  word 50000 times, with punctuation and organization added so
  that it looks more like a real book.

  What I Have Done:
  - Chosen a word to repeat: Spleck
*/

let word = "Spleck";
let wc = 0;
let chapter = 1;
let environments = [
  "Setntimental", "Stay Up!", "That's Tuff!", "Before I Dissapear", "WDYN?",
  "Inside Out", "Patience Is Taking Her Time", "No/Way 2 Live", "Little Bit", "Spleck"
];

// Shuffle environments array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
environments = shuffle(environments);

function setup() {
  noCanvas();

  let content = select("body");
  content.attribute("id", "content");

  content.child(createElement("h1", "Spleck"));

  // Create chapters with paragraphs and sentences
  while (wc < 50000 && chapter <= environments.length) {
    // https://www.w3schools.com/js/js_string_templates.asp
    let chapterTitle = `Chapter ${chapter}: Spleck in ${environments[chapter - 1]}`;
    
    // https://www.codecademy.com/learn/learn-p5js
    content.child(createElement("h2", chapterTitle));

    for (let p = 0; p < random(5, 20); p++) {
      let paragraph = '';
      for (let s = 0; s < random(3, 20); s++) {
        let Punct = [",", ",", ",", ";", " --"];
        let endPunct = [".", ".", "?", "!"];

        // Construct a sentence
        let sentence = word.charAt(0).toUpperCase() + word.slice(1);
        let sentenceLength = random(9, 25);
        wc += sentenceLength + 1;

        for (let w = 0; w < sentenceLength; w++) {
          sentence += " " + word;
          if (random() < 0.2) {
            sentence += random(Punct);
          }
        }
        sentence += random(endPunct) + " ";
        paragraph += sentence;
      }
      content.child(createElement("p", paragraph));
    }

    chapter++;
  }

  window.PagedPolyfill.preview();
}
