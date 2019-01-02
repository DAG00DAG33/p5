function pendulo() {
  this.len=200
  this.angle = 0
  this.aVel=0
  this.pos = createVector(0,0)
  
  this.draw = function(){
    this.pos.set(sin(this.angle)*this.len,cos(this.angle)*this.len)
    ellipse(this.pos.x,this.pos.y,60,60)
    stroke(255)
    line(0,0,this.pos.x,this.pos.y)
  }
  this.move = function(){
    this.aVel += (sin(this.angle)*grav*10)/this.len
    this.angle += this.aVel
    
  }
  
  
  
   
}