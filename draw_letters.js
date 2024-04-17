// Declare system colors
var systemBackgroundColor = 170; // Black
var systemLineColor = 255; // White
var systemBoxColor = [255, 0, 0]; // Red

// DRAW LETTER FUNCTION
function drawLetter(letterData) {
  // Set styles
  angleMode(DEGREES);
  stroke(0);
  fill(255);

  drawPaper(
    letterData["x1"],
    letterData["y1"],
    letterData["w1"],
    letterData["h1"],
    letterData["f1"]
  );

  drawPaper(
    letterData["x2"],
    letterData["y2"],
    letterData["w2"],
    letterData["h2"],
    letterData["f2"]
  );

  drawPaper(
    letterData["x3"],
    letterData["y3"],
    letterData["w3"],
    letterData["h3"],
    letterData["f3"]
  );

  drawPaper(
    letterData["x4"],
    letterData["y4"],
    letterData["w4"],
    letterData["h4"],
    letterData["f4"]
  );
}

// DRAW PAPER FUNCTION
function drawPaper(x, y, w, h, fold) {
  // Declare variables
  let x1 = x;
  let y1 = y;
  let x2 = x + w;
  let y2 = y;
  let x3 = x + w;
  let y3 = y + h;
  let x4 = x;
  let y4 = y + h;

  // Adjust vertices according to positive and negative values
  if (fold === 1) {
    if (abs(w) > abs(h)) {
      if (w > 0) {
        x2 -= 20;
      }
      else if (w < 0) {
        x2 += 20;
      }
    }

    else if (abs(h) > abs(w)) {
      if (h > 0) {
        y3 -= 20;
      }
      else if (h < 0) {
        y3 += 20;
      }
    }
  }
  
  // Draw quad
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
}

// INTERPOLATE LETTER FUNCTION
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

// Declare swap words array
let swapWords = [
  "ABCBCBCB",
  "ABCBCBCB",
  "ABCBCBCB"
];