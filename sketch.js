function preload() {
  // put preload code here
}

var sizeCarattere = 16;

var y;
var list;
var b;
var a;
var c;
var m;
var n;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  frameRate(10)
}

function carattere() {
  background(0, 0, 0, 30);


  if (y >= windowHeight) {
    frameCount = 0;
    y = 0;
    for (p = 0; p < windowWidth; p += sizeCarattere) {
      appear();

    }
  } else {
    for (p = 0; p < windowWidth; p += sizeCarattere) {
      appear();
    }
  }

  function appear(){
    c = random(-100, 0);
    m = random(0, 150);
    n = random(90, 150);
    y = round(frameCount * 20 + c);
    fill(m, 255, n);
    list = [0, 1, "a", "b", "c", "x", "y", "z"];
    b = round(random(0, 7));
    a = list[b];
    textSize(sizeCarattere);
    text(a, p, y);

  }
}


function draw() {
  carattere();
}
