/*
My 8 variables per letter are:
'anchorOneX' : the X value of the first anchor point
'anchorOneY' : the Y value of the first anchor point
'anchorTwoX' : the X value of the second anchor point
'anchorOneY' : the Y value of the first anchor point
'controlOneX' : the X value of the first control point
'controlOneY' : the Y value of the first control point
'controlTwoX' : the X value of the second control point
'controlTwoY' : the Y value of the second control point
*/

// Declare canvas dimensions
const canvasWidth = 960;
const canvasHeight = 500;

// Declare letter objects
const letterA = {
  'anchorOneX' : 25,
  'anchorOneY' : 50,
  'anchorTwoX' : 100,
  'anchorTwoY' : 100,
  'controlOneX' : -250,
  'controlOneY' : 100,
  'controlTwoX' : 50,
  'controlTwoY' : -325
}

const letterB = {
  'anchorOneX' : -100,
  'anchorOneY' : -100,
  'anchorTwoX' : 0,
  'anchorTwoY' : 0,
  'controlOneX' : -50,
  'controlOneY' : 300,
  'controlTwoX' : 225,
  'controlTwoY' : -75
}

const letterC = {
  'anchorOneX' : 80,
  'anchorOneY' : -50,
  'anchorTwoX' : 80,
  'anchorTwoY' : 50,
  'controlOneX' : -125,
  'controlOneY' : -225,
  'controlTwoX' : -125,
  'controlTwoY' : 225
}

// SETUP FUNCTION
function setup() {
  // Create the canvas and save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // Set styles
  angleMode(DEGREES);
  background(0);
  noStroke();

  // Disable loop
  noLoop();
}

// DRAW FUNCTION
function draw() {
  // Set center of canvas
  translate(canvasWidth / 2, canvasHeight / 2);

  // Draw letters
  letter(-250, 0, letterA);
  letter(0, 0, letterB);
  letter(250, 0, letterC);
}

// LETTER FUNCTION
function letter(x, y, data) {
  push();
  stroke(255);
  strokeWeight(10);
  noFill();
  bezier(x + data['anchorOneX'], y + data['anchorOneY'],
         x + data['controlOneX'], y + data['controlOneY'],
         x + data['controlTwoX'], y + data['controlTwoY'],
         x + data['anchorTwoX'], y + data['anchorTwoY']
  );
  pop();
}

// KEY TYPED FUNCTION
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  } else if (key == '@') {
    saveBlocksImages(true);
  }
}