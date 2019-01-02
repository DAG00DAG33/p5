var balls = [];

function setup() {
  
  createCanvas (100,100);
  //translate(-250, -250);
  for (var i = 0; i < 5; i++) {
    balls[i] = new ball();
  }
  grav=createVector(0,0);
  Fgrav=createVector(0,0);

  wind=createVector(0.6,0.1);

  drag=createVector(0,0)

  cGrav= new ball()
  cGrav.pos.set(height/2,width/2)
  ran=createVector(0,0)

  for(var i = 0; i<balls.length;i++){

    ran.set(random(40),random(40))
    balls[i].aplyForce(ran)
  }
  
}

function draw() {
  background(0);
  for (var j = 0; j < balls.length ; j++){
    //grav
    Fgrav.set(grav.x,grav.y);
    balls[j].aplyForce(Fgrav.mult(balls[j].m));

    //wind
    /*if (mouseIsPressed){
      balls[j].aplyForce(wind)
    }*/

    //drag
    /*var c=-0.1
    drag.set(balls[j].speed.x,balls[j].speed.y)
    drag.normalize().mult(drag.magSq()*c)
    balls[j].aplyForce(drag)*/
    

    force = createVector(0,0)
    force = cGrav.attract(balls[j])
    balls[j].aplyForce(force)

    
    
    


    balls[j].move();
    balls[j].draw();
    
    
  }
  cGrav.draw()
  }
  
  
