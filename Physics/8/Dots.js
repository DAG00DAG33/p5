function ball() {
  this.pos=createVector(random(width),random(height))
  //this.x = random(width);
  //this.y = random(height);
  this.speed=createVector(0,0)
  //this.xspeed=0;
  //this.yspeed=0;
  this.acc=createVector(0,0)
  //this.xgravity;
  //this.ygravity;
  
  this.m=random(1,3);
  this.r=8*this.m
  this.f=createVector(0,0)
  this.alfa=0
  this.draw = function(){
    translate(this.pos.x,this.pos.y)
    rotate(this.alfa)
    triangle(0,-this.r*2,-this.r,2*this.r,this.r,2*this.r)
    rotate(-this.alfa)


    //ellipse(0,0,this.m*20,this.m*20)//(this.pos.x, this.pos.y, this.m*20,this.m*20);
    translate(-this.pos.x,-this.pos.y)
  }
  
  this.move = function(){
    
    
    this.speed.add(this.acc)
    this.pos.add(this.speed)
    this.acc.set(0,0)

    /*if (this.pos.x < 0||width < this.pos.x){
      this.speed.x= -1*this.speed.x
      this.pos.add(this.speed);
    }
    if (this.pos.y < 0||height < this.pos.y){
      this.speed.y= -1*this.speed.y
      this.pos.add(this.speed);
    }*/
    this.alfa=this.speed.heading()+PI/2


  }
  this.aplyForce = function(force){
    this.f.set(0,0)
    this.f.set(force.x,force.y)
    this.f.div(this.m)
    this.acc.add(this.f)
    
  }
  this.attract = function(atracted){
    var G = 0.6

    force=createVector(0,0)
    force.set(this.pos.x,this.pos.y)
    force.sub(atracted.pos)
    d = force.mag()


    force.normalize()
    force.mult(this.m*atracted.m*G/d^2)
    return (force)

    

  }
  
   
}