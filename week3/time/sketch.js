function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0, 105, 148); // Blue background to resemble a pool

  //This time project uses simple shapes and color changes to represent the passing of time. The movement and position of the rectangles symbolize the continuous and cyclic nature of time. The blue background, resembling water, is a metaphor for the fluidity and depth of time.

  let currentHour = hour();
  let currentMinute = minute();
  let currentSecond = second();

  // Map the hours, minutes, and seconds to x and y positions
  let hourX = map(currentHour, 0, 23, 50, width - 50);
  let minuteX = map(currentMinute, 0, 59, 50, width - 50);
  let secondX = map(currentSecond, 0, 59, 50, width - 50);

  let hourY = map(currentHour, 0, 23, height / 4, height / 4);
  let minuteY = map(currentMinute, 0, 59, height / 2, height / 2);
  let secondY = map(currentSecond, 0, 59, 3 * height / 4, 3 * height / 4);

  // Draw the hour rectangle
  fill(255, 165, 0); // Orange color
  rect(hourX, hourY, 50, 50);

  // Draw the minute rectangle
  fill(0, 255, 0); // Green color
  rect(minuteX, minuteY, 50, 50);

  // Draw the second rectangle
  fill(255, 0, 0); // Red color
  rect(secondX, secondY, 50, 50);
}

// p5.js reference for hour(): https://p5js.org/reference/#/p5/hour
// p5.js reference for minute(): https://p5js.org/reference/#/p5/minute
// p5.js reference for second(): https://p5js.org/reference/#/p5/second
// p5.js reference for map(): https://p5js.org/reference/#/p5/map
