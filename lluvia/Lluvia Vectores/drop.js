
// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/KkyIDI6rQJI


function Drop() {
  this.pos = createVector(random(width),random(height))
  //this.x = random(width);
  //this.y = random(0, height)
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.speed = createVector(0,map(this.z, 0, 20, 1, 20));
  var grav = createVector(0,map(this.z, 0, 20, 0, 0.2));

  this.fall = function() {
    this.pos.add(this.speed)
    this.speed.add(grav)

    if (this.pos.y > height) {
      this.pos.y = random(-200, -100);
      this.speed.y = map(this.z, 0, 20, 1, 20)
    
    }
  }

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(138, 43, 226);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y+this.len);
  }
}

