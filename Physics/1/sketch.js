var balls = [];

function setup() {

  createCanvas (500,500);
  //translate(-250, -250);
  for (var i = 0; i < 1; i++) {
    balls[i] = new ball();
  }
  
}

function draw() {
  background(0);
  for (var j = 0; j < balls.length ; j++){
    balls[j].move();
    balls[j].draw();
    
  }
  
} 