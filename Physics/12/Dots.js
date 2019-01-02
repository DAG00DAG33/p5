function pendulo() {
  this.len1=200
  this.len2=200
  this.angle1 = 90
  this.aVel1=0
  this.angle2=88
  this.aVel2=0
  this.pos = createVector(0,0)
  
  this.draw = function(){
    this.pos.set(sin(this.angle1)*this.len1,sin(this.angle2)*this.len2)
    fill(0,255)
    noStroke()
    ellipse(this.pos.x,this.pos.y,3,3)
    /*stroke(255)
    line(0,0,this.pos.x,this.pos.y)*/
  }
  this.move = function(){
    this.aVel1 += (sin(this.angle1)*grav*10)/this.len1
    this.angle1 += this.aVel1

    this.aVel2 += (sin(this.angle2)*grav*10)/this.len2
    this.angle2 += this.aVel2
    
  }
  
  
  
   
}