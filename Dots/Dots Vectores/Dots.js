function dot() {
  this.pos=createVector(random(-width/2,width+width/2),random(-height/2,height+height/2))
  //this.x = random(-width/2,width+width/2);
  //this.y = random(-height/2,height+height/2);
  this.speed=createVector(0,0)
  //this.xspeed=0;
  //this.yspeed=0;
  this.grav=createVector(0,0)
  //this.xgravity;
  //this.ygravity;
  
  this.draw = function(){
    ellipse(this.pos.x, this.pos.y, 6, 6);
  }
  
  this.move = function(){
    this.grav.x = map(mouseX, 0, width, -0.1, 0.1);
    this.grav.y = map(mouseY, 0, height, -0.1, 0.1);
    this.speed.add(this.grav)
    this.pos.add(this.speed)
    if (dist(this.pos.x,this.pos.y,width/2,height/2)>=height){
      this.pos.sub(createVector(500,500)).mult(-1)
      //this.x = -(this.x-500);
      //this.y = -(this.y-500);
    }
  }
  
   
}