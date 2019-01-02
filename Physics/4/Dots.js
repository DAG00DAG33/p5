function ball() {
  this.pos=createVector(random(width),0)
  //this.x = random(width);
  //this.y = random(height);
  this.speed=createVector(0,0)
  //this.xspeed=0;
  //this.yspeed=0;
  this.acc=createVector(0,0)
  //this.xgravity;
  //this.ygravity;
  
  this.m=random(1,3);
  this.f=createVector(0,0)
  
  this.draw = function(){
    ellipse(this.pos.x, this.pos.y, this.m*20,this.m*20);
    
  }
  
  this.move = function(){
    
    
    this.speed.add(this.acc)
    this.pos.add(this.speed)
    this.acc.set(0,0)

    if (this.pos.x < 0||width < this.pos.x){
      this.speed.x= -1*this.speed.x
      this.pos.add(this.speed);
    }
    if (this.pos.y < 0||height < this.pos.y){
      this.speed.y= -1*this.speed.y
      this.pos.add(this.speed);
    }


  }
  this.aplyForce = function(force){
    this.f.set(0,0)
    this.f.set(force.x,force.y)
    this.f.div(this.m)
    this.acc.add(this.f)
    
  }
  
   
}