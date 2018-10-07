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
  fill(0, 255, 90);

  var y;
  var list;
  var b;
  var a;

  y = frameCount * 20;


  if (y >= windowHeight) {
    frameCount = 0;
    for (p = 0; p < windowWidth; p += sizeCarattere) {
      list = [0, 1, "a", "b", "c", "x", "y", "z"];
      b = round(random(0, 7));
      a = list[b];
      textSize(sizeCarattere);
      text(a, p, y);
    }
  } else {
    for (p = 0; p < windowWidth; p += sizeCarattere) {
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
