var balls = [];

function setup() {
  
  createCanvas (500,500);
  //translate(-250, -250);
  for (var i = 0; i < 1; i++) {
    balls[i] = new ball();
  }
  grav=createVector(0,0);
  Fgrav=createVector(0,0);

  wind=createVector(0.6,0.1);

  drag=createVector(0,0)



  
  target=createVector(0,0)
  desired=createVector(0,0)
  steering=createVector(0,0)
  
}

function draw() {
  background(0);
  target.set(mouseX,mouseY);
  for (var j = 0; j < balls.length ; j++){
    //grav
    /*Fgrav.set(grav.x,grav.y);
    balls[j].aplyForce(Fgrav.mult(balls[j].m));*/

    //wind
    /*if (mouseIsPressed){
      balls[j].aplyForce(wind)
    }*/

    //drag
    /*var c=-0.1
    drag.set(balls[j].speed.x,balls[j].speed.y)
    drag.normalize().mult(drag.magSq()*c)
    balls[j].aplyForce(drag)*/
    

    /*force = createVector(0,0)
    force = cGrav.attract(balls[j])
    balls[j].aplyForce(force)*/


    desired.set(mouseX,mouseY)
    desired.sub(balls[j].pos)
    /*if(dist(balls[j].pos,target)<100){
      var maxS = map(dist(balls[j].pos,target),0,100,0,balls[j].maxSpeed)
    }
    else{
      var maxS =balls[j].maxSpeed
    }*/
    var maxS =balls[j].maxSpeed
    desired.setMag(maxS)

    steering.set(desired.x,desired.y)
    steering.sub(balls[j].vel)
    steering.limit(balls[j].maxForce)

    balls[j].aplyForce(steering)

    
    
    


    balls[j].move();
    balls[j].draw();
    
    
  }

  }
  
  
