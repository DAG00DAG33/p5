let bubbles = [];
var a = 0
var b = 0


function setup() {
  createCanvas(600, 400);
  var positions = [height/2, width/4,     height/2, (3*width)/4];
  for (let i = 0; i < 2; i++) {
    let x = positions[2*i + 1];
    let y = positions[2*i];
    let r = 30;
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}
function mouseReleased() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].unclicked(mouseX, mouseY);
  }
}


function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.brightness = 255;
    }
  }

  unclicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.brightness = 0;
    }
  }


  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}