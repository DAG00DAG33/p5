var dots = [];

function setup() {
  
  createCanvas (500,500);
  //translate(-250, -250);
  for (var i = 0; i < 200; i++) {
    dots[i] = new dot();
  }
  
}

function draw() {
  background(0);
  for (var j = 0; j < dots.length ; j++){
    dots[j].move();
    dots[j].draw();
    
  }
  
}