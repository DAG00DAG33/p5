var balls = [];

function setup() {
  
  createCanvas (500,500);
  //translate(-250, -250);
  for (var i = 0; i < 5; i++) {
    balls[i] = new ball();
  }
  grav=createVector(0,0.3);
  Fgrav=createVector(0,0);

  wind=createVector(0.6,0.1);

  drag=createVector(0,0)
  
}

function draw() {
  background(0);
  for (var j = 0; j < balls.length ; j++){
    //grav
    Fgrav.set(grav.x,grav.y);
    balls[j].aplyForce(Fgrav.mult(balls[j].m));

    //wind
    if (mouseIsPressed){
      balls[j].aplyForce(wind)
    }

    //drag
    if(balls[j].pos.y>0){
      var c=-0.6
      drag.set(balls[j].speed.x,balls[j].speed.y)
      drag.normalize().mult(drag.magSq()*c)
      balls[j].aplyForce(drag)
    }

    /*if (20>mouseY) {
      balls[j].pos.y=0
    }*/

    
    
    


    balls[j].move();
    balls[j].draw();
    
    
  }
  }
  
  
