function preload() {
  // put preload code here
}

var sizeCarattere = 16;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(10)
}

function carattere() {
  background(0, 0, 0, 30);


  var y;
  var list;
  var b;
  var a;

  var m;
  var n;

  y = frameCount * 20;


  if (y >= windowHeight) {
    frameCount = 0;
    for (p = 0; p < windowWidth; p += sizeCarattere) {
      m = random(0, 150);
      n = random(90, 150);
      fill(m, 255, n);
      list = [0, 1, "a", "b", "c", "x", "y", "z"];
      b = round(random(0, 7));
      a = list[b];
      textSize(sizeCarattere);
      text(a, p, y);
    }
  } else {
    for (p = 0; p < windowWidth; p += sizeCarattere) {
      m = random(0, 10);
      n = random(90, 180);
      fill(m, 255, n);
      list = [0, 1, "a", "b", "c", "x", "y", "z"];
      b = round(random(0, 7));
      a = list[b];
      textSize(sizeCarattere);
      text(a, p, y);
    }
  }

}


function draw() {
  carattere();

}
