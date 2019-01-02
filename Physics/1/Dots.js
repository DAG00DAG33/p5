function ball() {
  this.pos=createVector(random(width),random(height))
  //this.x = random(width);
  //this.y = random(height);
  this.speed=createVector(0,0)
  //this.xspeed=0;
  //this.yspeed=0;
  this.acc=createVector(0,0.3)
  //this.xgravity;
  //this.ygravity;
  
  this.draw = function(){
    ellipse(this.pos.x, this.pos.y, 30, 30);
  }
  
  this.move = function(){
    this.speed.add(this.acc)
    this.pos.add(this.speed)
    if (this.pos.x < 0||width < this.pos.x){
      this.speed.x= -1*this.speed.x
    }
    if (this.pos.y < 0||height < this.pos.y){
      this.speed.y= -1*this.speed.y
    }
  }
  
   
}