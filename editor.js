/*******
 * define this "sliderInfo" variable
 * have an entry for each slider you want
 * and each row should be:
 * ["object_field", minimum_bound, maximum_bound]
 */
const sliderInfo = [
  ["x1", 0, 100],
  ["y1", 0, 200],
  ["w1", -200, 200],
  ["h1", -200, 200],
  ["f1", 0, 200],

  ["x2", 0, 100],
  ["y2", 0, 200],
  ["w2", -200, 200],
  ["h2", -200, 200],
  ["f2", 0, 200],

  ["x3", 0, 100],
  ["y3", 0, 200],
  ["w3", -200, 200],
  ["h3", -200, 200],
  ["f3", 0, 200],

  ["x4", 0, 100],
  ["y4", 0, 200],
  ["w4", -200, 200],
  ["h4", -200, 200],
  ["f4", 0, 200],
];

// PROBABLY DON'T NEED TO EDIT ANYTHING ELSE. STOP HERE.

const numSliders = sliderInfo.length;

if (typeof systemBackgroundColor === 'undefined') {
    var systemBackgroundColor = "#e3eded";
}

// this will use variables if they are already defined
// var systemBackgroundColor = systemBackgroundColor || "#e3eded";

// if everything is defined above, this should just work
function sliderToDataObject() {
  let obj = {};
  for (let i=0; i<numSliders; i=i+1) {
    o_name = sliderInfo[i][0]
    bounds_low = sliderInfo[i][1]
    bounds_high = sliderInfo[i][2]
    obj[o_name] = map(param_sliders[i].value(), 0, 100, bounds_low, bounds_high);
  }
  return obj;
}

let param_sliders = [];

let main_canvas = null;

const canvasWidth = 960;
const canvasHeight = 500;

let debugBox = false;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  for(let i=0; i<numSliders; i++) {
    let cur_row = select("#row" + (i+1))
    cur_row.show();

    // Set default slider values
    let min, max, defaultValue;
    if (i === 0 || i === 10) {
      defaultValue = 30;
      min = 0;
      max = 100;
    }
    else if (i === 5 || i === 15) {
      defaultValue = 50;
      min = 0;
      max = 0;
    }
    else if (i === 1 || i === 6) {
      defaultValue = 130;
      min = 0;
      max = 200;
    }
    else if (i === 11 || i === 16) {
      defaultValue = 150;
      min = 0;
      max = 200;
    }
    else if (i === 2 || i === 3 || i === 7 || i === 8 || i === 12 || i === 13 || i === 17 || i === 18) {
      defaultValue = 20;
      min = -200;
      max = 200;
    }
    else if (i === 4 || i === 9 || i === 14 || i === 19) {
      defaultValue = 0;
      min = 0;
      max = 200;
    }

    let cur_slider = createSlider(0, 100, map(defaultValue, min, max, 0, 100));
    let containerString = "slider" + (i+1) + "Container"
    cur_slider.parent(containerString);
    param_sliders.push(cur_slider);
  }

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);
  button.parent(buttonContainer);
}

function buttonPressedEvent() {
  let obj = sliderToDataObject();
  json = JSON.stringify(obj, null, 2);
  alert(json);
}

function draw () {
  background(255);
  for (let y = 0; y < height; y++) {
    let amount = map(y, 0, height, 0, 1);
    let c;
    if (y < height / 2) {
      c = lerpColor(color("#BA8C63"), color("#EBC39D"), amount);
    }
    else {
      c = lerpColor(color("#EBC39D"), color("#BA8C63"), amount);
    }
    push();
    strokeWeight(2);
    stroke(c);
    line(0, y, width, y);
    pop();
  }

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  push();
  scale(2);
  translate(width/4 - 50, 25);

  if (debugBox) {
    noFill()
    strokeWeight(4);
    stroke(0, 200, 0);
    rect(0, 0, 100, 200);
  }

  let obj = sliderToDataObject();
  drawLetter(obj);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
  else if (key == 'd') {
    debugBox = !debugBox;
    // console.log("debugBox is now: " + debugBox);
    redraw();
  }
  else if (key == ' ') {
    let obj = sliderToDataObject();
    json = JSON.stringify(obj, null, 2);
    console.log(json);
  }
}
