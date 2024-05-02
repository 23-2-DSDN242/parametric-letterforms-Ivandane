// Declare system colors
var systemLineColor = 255; // White
var systemBoxColor = [255, 100]; // Red

// Declare colors array
let colors = [];

// DRAW LETTER FUNCTION
function drawLetter(letterData, currentLetter) {
  // Populate colors array
  colors = [
    color("#F25D50"),
    color("#F29BDB"),
    color("#0F9BF2"),
    color("#B379D9"),
    color("#9EF062"),
    color("#F2D22E"),
    color("#F28322"),
    color("#79DCF2"),
    color("#E3E3E3")
  ];

  // If not in exhibition mode, set default color to first in the array
  if (typeof currentLetter === "undefined") {
    currentLetter = 0;
  }

  // Draw shadow (4 times)
  for (let i = 1; i <= 4; i++) {
    drawShadow(
      letterData["x" + i],
      letterData["y" + i],
      letterData["w" + i],
      letterData["h" + i],
      letterData["f" + i]
    );
  }

  // Draw paper (4 times)
  for (let i = 1; i <= 4; i++) {
    drawPaper(
      letterData["x" + i],
      letterData["y" + i],
      letterData["w" + i],
      letterData["h" + i],
      letterData["f" + i],
      colors[currentLetter],
      colors[8]
    );
  }
}

// DRAW SHADOW FUNCTION
function drawShadow(x, y, w, h, fold) {
  let x1 = x;
  let y1 = y;
  let x2 = x + w;
  let y2 = y;
  let x3 = x + w;
  let y3 = y + h;
  let x4 = x;
  let y4 = y + h;
  
  let fx = 0;
  let fy = 0;
  let fw = 0;
  let fh = 0;

  let shadowOffsetX = 5;
  let shadowOffsetY = -5

  // Set styles
  push();
  noStroke();
  fill(100);

  // Adjust vertices according to fold length
  if (fold !== 0) {
    // If width is greater than height
    if (abs(w) > abs(h)) {
      // Positive width
      if (w > 0) {
        x2 -= 20;

        // Set fold variables
        if (h > 0 && fold > 1) {
          fx = x2;
          fy = y3;
          fw = 20;
          fh = fold;
        } else if (h < 0 && fold > 1) {
          fx = x2;
          fy = y3;
          fw = 20;
          fh = -fold;
        }
      }
      
      // Negative width
      else if (w < 0) {
        x2 += 20;

        // Set fold variables
        if (h > 0 && fold > 1) {
          fx = x3;
          fy = y3;
          fw = 20;
          fh = fold;
        } else if (h < 0 && fold > 1) {
          fx = x3;
          fy = y3;
          fw = 20;
          fh = -fold;
        }
      }
    } 
    
    // If height is greater than width
    else if (abs(h) > abs(w)) {
      // Positive height
      if (h > 0) {
        y3 -= 20;

        // Set fold variables
        if (w > 0 && fold > 1) {
          fx = x4;
          fy = y3;
          fw = -fold;
          fh = 20;
        } else if (w < 0 && fold > 1) {
          fx = x4;
          fy = y3;
          fw = fold;
          fh = 20;
        }
      }
      
      // Negative height
      else if (h <= 0) {
        y3 += 20;

        // Set fold variables
        if (w > 0 && fold > 1) {
          fx = x4;
          fy = y4;
          fw = -fold;
          fh = 20;
        } else if (w < 0 && fold > 1) {
          fx = x4;
          fy = y4;
          fw = fold;
          fh = 20;
        }
      }
    }

    // Draw fold
    rect(fx + shadowOffsetX, fy + shadowOffsetY, fw, fh);
  }

  // Draw paper
  quad(
    x1 + shadowOffsetX,
    y1 + shadowOffsetY,
    x2 + shadowOffsetX,
    y2 + shadowOffsetY,
    x3 + shadowOffsetX,
    y3 + shadowOffsetY,
    x4 + shadowOffsetX,
    y4 + shadowOffsetY);
  pop();
}

// DRAW PAPER FUNCTION
function drawPaper(x, y, w, h, fold, colorOne, colorTwo) {
  // Declare variables
  let x1 = x;
  let y1 = y;
  let x2 = x + w;
  let y2 = y;
  let x3 = x + w;
  let y3 = y + h;
  let x4 = x;
  let y4 = y + h;
  
  let fx = 0;
  let fy = 0;
  let fw = 0;
  let fh = 0;

  // Set styles
  push();
  noStroke();
  fill(colorOne);

  // Adjust vertices according to fold length
  if (fold !== 0) {
    // If width is greater than height
    if (abs(w) > abs(h)) {
      // Positive width
      if (w > 0) {
        x2 -= 20;

        // Set fold variables
        if (h > 0 && fold > 1) {
          fx = x2;
          fy = y3;
          fw = 20;
          fh = fold;
        } else if (h < 0 && fold > 1) {
          fx = x2;
          fy = y3;
          fw = 20;
          fh = -fold;
        }
      }
      
      // Negative width
      else if (w < 0) {
        x2 += 20;

        // Set fold variables
        if (h > 0 && fold > 1) {
          fx = x3;
          fy = y3;
          fw = 20;
          fh = fold;
        } else if (h < 0 && fold > 1) {
          fx = x3;
          fy = y3;
          fw = 20;
          fh = -fold;
        }
      }
    } 
    
    // If height is greater than width
    else if (abs(h) > abs(w)) {
      // Positive height
      if (h > 0) {
        y3 -= 20;

        // Set fold variables
        if (w > 0 && fold > 1) {
          fx = x4;
          fy = y3;
          fw = -fold;
          fh = 20;
        } else if (w < 0 && fold > 1) {
          fx = x4;
          fy = y3;
          fw = fold;
          fh = 20;
        }
      }
      
      // Negative height
      else if (h <= 0) {
        y3 += 20;

        // Set fold variables
        if (w > 0 && fold > 1) {
          fx = x4;
          fy = y4;
          fw = -fold;
          fh = 20;
        } else if (w < 0 && fold > 1) {
          fx = x4;
          fy = y4;
          fw = fold;
          fh = 20;
        }
      }
    }

    // Draw fold
    push();
    fill(colorTwo);
    rect(fx, fy, fw, fh);
    pop();

    // Draw fold shadow
    for (let i = 0; i < 25; i++) {
      // Declare color variable
      let c = lerpColor(color(25, 25), color(255, 0), map(i, 0, 25, 0, 1));
      
      // Set styles
      push();
      strokeWeight(2);
      strokeCap(SQUARE);
      stroke(c);
      noFill();

      // Create shadow if width and height is at least 20, and fold length is at least 1
      if (abs(w) >= 20 && abs(h) >= 20 && fold >= 1) {
        // If width is greater than height
        if (abs(w) > abs(h)) {
          // Positive width, positive height
          if (w > 0 && h > 0) {
            line(fx, fy + i, fx + fw, fy + i);
          }
          
          // Negative width, positive height
          else if (w < 0 && h > 0) {
            line(fx, fy + i, fx + fw, fy + i);
          }
          
          // Positive width, negative height
          else if (w > 0 && h < 0) {
            line(fx, fy - i, fx + fw, fy - i);
          }
          
          // Negative width, negative height
          else if (w < 0 && h < 0) {
            line(fx, fy - i, fx + fw, fy - i);
          }
        }
        
        // If height is greater than width
        else if (abs(h) > abs(w)) {
          // Positive width, positive height
          if (w > 0 && h > 0) {
            line(fx - i, fy, fx - i, fy + fh);
          }
          
          // Negative width, positive height
          else if (w < 0 && h > 0) {
            line(fx + i, fy, fx + i, fy + fh);
          }
          
          // Positive width, negative height
          else if (w > 0 && h < 0) {
            line(fx - i, fy, fx - i, fy + fh);
          }
          
          // Negative width, negative height
          else if (w < 0 && h < 0) {
            line(fx + i, fy, fx + i, fy + fh);
          }
        }
      }
      pop();
    }
  }

  // Draw paper
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
  pop();
}

// INTERPOLATE LETTER FUNCTION
function interpolate_letter(percent, oldObj, newObj) {
  // Create new letter object
  let new_letter = {};

  // Repeat for each paper (4 times)
  for (let i = 1; i <= 4; i++) {
    // Set default variables for each letter
    new_letter["x" + i] = 0;
    new_letter["y" + i] = 0;
    new_letter["w" + i] = 0;
    new_letter["h" + i] = 0;
    new_letter["f" + i] = 0;

    // Declare old, new and target variables
    let oldX = oldObj["x" + i];
    let oldY = oldObj["y" + i];
    let oldWidth = oldObj["w" + i];
    let oldHeight = oldObj["h" + i];
    let oldFold = oldObj["f" + i];

    let newX = newObj["x" + i];
    let newY = newObj["y" + i];
    let newWidth = newObj["w" + i];
    let newHeight = newObj["h" + i];
    let newFold = newObj["f" + i];

    let targetX = 0;
    let targetY = 0;
    let targetWidth = 20;
    let targetHeight = 20;
    let targetFold = 0;

    if (i === 1) {
      targetX = 30;
      targetY = 130;
    }
    if (i === 2) {
      targetX = 50;
      targetY = 130;
    }
    if (i === 3) {
      targetX = 30;
      targetY = 150;
    }
    if (i === 4) {
      targetX = 50;
      targetY = 150;
    }

    // 0% - 20%
    // Keep paper stationary, shrink folded section
    if (percent < 20) {
      new_letter["x" + i] = oldX;
      new_letter["y" + i] = oldY;
      new_letter["w" + i] = oldWidth;
      new_letter["h" + i] = oldHeight;
      if (oldFold !== targetFold) {
        new_letter["f" + i] = map(percent, 0, 20, oldFold, targetFold);
      }
      else {
        new_letter["f" + i] = targetFold;
      }
    }
    
    // 20% - 40%
    // Move paper to the center
    else if (percent >= 20 && percent < 40) {
      if (oldWidth !== 0 && oldHeight !== 0) {
        new_letter["x" + i] = map(percent, 20, 40, oldX, targetX);
        new_letter["y" + i] = map(percent, 20, 40, oldY, targetY);
        if (abs(oldWidth) > abs(oldHeight)) {
          new_letter["w" + i] = map(percent, 20, 40, oldWidth, targetWidth);
          new_letter["h" + i] = targetHeight;
        } else if (abs(oldHeight) > abs(oldWidth)) {
          new_letter["w" + i] = targetWidth;
          new_letter["h" + i] = map(percent, 20, 40, oldHeight, targetHeight);
        }
        else {
          new_letter["w" + i] = targetWidth;
          new_letter["h" + i] = targetHeight;
        }
        new_letter["f" + i] = targetFold;
      }
      else {
        new_letter["x" + i] = 0;
        new_letter["y" + i] = 0;
        new_letter["w" + i] = 0;
        new_letter["h" + i] = 0;
        new_letter["f" + i] = 0;
      }
    }

    // 40% - 60%
    // Keep paper stationary
    else if (percent >= 40 && percent < 60) {
      new_letter["x" + i] = targetX;
      new_letter["y" + i] = targetY;
      new_letter["w" + i] = targetWidth;
      new_letter["h" + i] = targetHeight;
      new_letter["f" + i] = targetFold;
    }
    
    // 60% - 80%
    // Move paper to new locations
    else if (percent >= 60 && percent < 80) {
      if (newWidth !== 0 && newHeight !== 0) {
        new_letter["x" + i] = map(percent, 60, 80, targetX, newX);
        new_letter["y" + i] = map(percent, 60, 80, targetY, newY);
        if (abs(newWidth) > abs(newHeight)) {
          new_letter["w" + i] = map(percent, 60, 80, targetWidth, newWidth);
          new_letter["h" + i] = targetHeight;
        } else if (abs(newHeight) > abs(newWidth)) {
          new_letter["w" + i] = targetWidth;
          new_letter["h" + i] = map(percent, 60, 80, targetHeight, newHeight);
        }
        else {
          new_letter["w" + i] = targetWidth;
          new_letter["h" + i] = targetHeight;
        }
        new_letter["f" + i] = targetFold;
      }
      else {
        new_letter["x" + i] = 0;
        new_letter["y" + i] = 0;
        new_letter["w" + i] = 0;
        new_letter["h" + i] = 0;
        new_letter["f" + i] = 0;
      }
    }
    
    // 80% - 100%
    // Keep paper stationary, extend folded section
    else {
      new_letter["x" + i] = newX;
      new_letter["y" + i] = newY;
      new_letter["w" + i] = newWidth;
      new_letter["h" + i] = newHeight;
      if (newFold !== targetFold) {
        new_letter["f" + i] = map(percent, 80, 100, targetFold, newFold);
      }
      else {
        new_letter["f" + i] = targetFold;
      }
    }
  }

  // Return new letter object
  return new_letter;
}

// Declare swap words array
let swapWords = [
  "ORIGAMI!",
  "FOLDABLE",
  "ARTISTRY",
  "CREASING",
  "PAPERCUT",
  "CRAFTING",
  "PATTERNS",
  "CREATION",
  "1234567!",
  "IVANDANE"
];