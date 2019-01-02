var balls = [];

function setup() {
  
  createCanvas (500,500);
  //translate(-250, -250);
  for (var i = 0; i < 5; i++) {
    balls[i] = new ball();
  }
  grav=createVector(0,0.3);
  Fgrav=createVector(0,0);

  wind=createVector(0.6,0)
  
}

function draw() {
  background(0);
  for (var j = 0; j < balls.length ; j++){

    Fgrav.set(grav.x,grav.y);
    

    balls[j].aplyForce(Fgrav.mult(balls[j].m));

    if (mouseIsPressed){
      balls[j].aplyForce(wind)
    }
    
    


    balls[j].move();
    balls[j].draw();
    
    
  }
  
} 