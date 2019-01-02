var balls = [];

function setup() {
  background(0);

  
  createCanvas (500,500);
  //translate(-250, -250);
  for (var i = 0; i < 1; i++) {
    balls[i] = new ball();
  }
  grav=createVector(0,0.3);
  lgrav=grav.y
  Fgrav=createVector(0,0);

  wind=createVector(0.6,0);

  drag=createVector(0,0)

  ran=createVector(0,0)

  /*for(var i = 0; i<balls.length;i++){

    ran.set(random(40),random(40))
    balls[i].aplyForce(ran)
  }*/
    background(0);

  
}

function draw() {
  background(0);
  for (var j = 0; j < balls.length ; j++){
    //GRAV
    Fgrav.set(grav.x,grav.y);
    balls[j].aplyForce(Fgrav.mult(balls[j].m));

    //WIND
    /*if (mouseIsPressed){
      balls[j].aplyForce(wind)
    }*/

    //DRAG
    var cd=-0.05
    drag.set(balls[j].speed.x,balls[j].speed.y) 
    drag.normalize().mult(drag.magSq()*cd)
    balls[j].aplyForce(drag)
    

    //ATRACTION
    /*
    force = createVector(0,0)
    for (var k = 0; k < balls.length; k++){
      force.set(0,0)
      force = balls[k].attract(balls[j])
      balls[j].aplyForce(force)
    }*/


    //LIFT
    //var cl = 0.4
    balls[j].beta=balls[j].speed.heading()-balls[j].alfa
    var cl = 0.1*(sin(balls[j].beta)^7+sin(balls[j].beta)/5)*(abs(cos(balls[j].beta))/cos(balls[j].beta))
    print (cl)
    balls[j].w.set(balls[j].speed.y,balls[j].speed.x)
    balls[j].w.normalize().mult(cl)
    balls[j].aplyForce(balls[j].w) 

    
    
    


    balls[j].move();
    balls[j].draw();
    
    
  }
  }
  
  
 