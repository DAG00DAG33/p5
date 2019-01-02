function dot() {
  this.x = random(-width/2,width+width/2);
  this.y = random(-height/2,height+height/2);
  this.xspeed=0;
  this.yspeed=0;
  this.xgravity;
  this.ygravity;
  
  this.draw = function(){
    ellipse(this.x, this.y, 6, 6);
  }
  
  this.move = function(){
    this.xgravity = map(mouseX, 0, width, -0.1, 0.1);
    this.ygravity = map(mouseY, 0, height, -0.1, 0.1);
    this.xspeed = this.xspeed + this.xgravity;
    this.yspeed = this.yspeed + this.ygravity;
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    if (dist(this.x,this.y,width/2,height/2)>=height){
      this.x = -(this.x-500);
      this.y = -(this.y-500);
    }
  }
  
  
}