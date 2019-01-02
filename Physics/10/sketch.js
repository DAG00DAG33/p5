var angle = 0
var dis = 200

function setup() {
  angleMode(DEGREES);

  createCanvas (500,500);

  
  }

function draw() {
  background(0);
  translate(250,250)
  angle += 1
  var pos=createVector(0,0)
  pos.set(cos(angle)*dis,sin(angle)*dis)
  ellipse(pos.x,pos.y,60,60)
  stroke(255)
  line(0,0,pos.x,pos.y)


  
  }
  
  