var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_blue = createButton("BLUE");
  btn_blue.position(100,50);
  btn_blue.mousePressed(blue_bg)

  btn_green = createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);

}
function blue_bg() {
  r = 0;
  g = 0;
  b = 250;
}

function green_bg() {
  r = 0;
  g = 255;
  b = 0;
}

function draw() {
  background(r,g,b);
}

