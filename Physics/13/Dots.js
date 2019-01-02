function ball() {
  this.pos=createVector(50,50)
  //this.x = random(width);
  //this.y = random(height);
  this.speed=createVector(0,0)
  this.w=createVector(0,0)
  //this.xspeed=0;
  //this.yspeed=0;
  this.acc=createVector(0,0)
  //this.xgravity;
  //this.ygravity;
  
  this.m=random(0.5,1);
  //if(random(1)<1){this.m=this.m*-1}
  this.f=createVector(0,0)



  //-variebles de pendulo
  this.len=200
  this.aVel=0


  //-variables triángulo
  this.r=16*this.m
  this.alfa= PI/2
  this.beta
  
  this.lift=createVector(0,0)

  //-GENES
  this.frente
  this.linea1
  this.linea2
  this.holgura
  this.apertura1
  this.apertura2
  this.peso1=1
  this.peso2=0.5
  this.gramaje
  //disparo
  this.Dangulo
  this.Dfuerza
  
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

    

    if (this.pos.x < 0||width < this.pos.x){
      this.speed.x= -1*this.speed.x
      this.pos.add(this.speed);
    }
    if (this.pos.y < 0||height < this.pos.y){
      this.speed.y= -1*this.speed.y
      this.pos.add(this.speed);
    }
    //this.alfa=this.speed.heading()+PI/2

    this.aVel += (sin(this.alfa)*lgrav*this.peso1)/(this.len*0.3*this.m)
    this.aVel += (-1*sin(this.alfa)*lgrav*this.peso2)/(this.len*0.7*this.m)
    this.alfa += this.aVel


  }
  this.aplyForce = function(force){
    this.f.set(0,0)
    this.f.set(force.x,force.y)
    this.f.div(this.m)
    this.acc.add(this.f)    
  }
  this.attract = function(atracted){
    var G = 100

    force=createVector(0,0)
    force.set(this.pos.x,this.pos.y)
    force.sub(atracted.pos)
    d = force.mag()


    force.normalize()
    force.mult(this.m*atracted.m*G/(d*d))
    return (force)

    

  }
  
   
}