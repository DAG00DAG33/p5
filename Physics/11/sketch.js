

var pendulos = []
var grav=-10

function setup() {
  angleMode(DEGREES);

  createCanvas (500,500);

  for (var i = 0; i < 1; i++) {
    pendulos[i] = new pendulo();
  }

  
  }

function draw() {
  background(0);
  translate(250,250)
  for(var i = 0; i<pendulos.length;i++){
    pendulos[i].move()
    pendulos[i].draw()


    //DRAG
    //var c=-0.0
    //pendulos[i].aVel=pendulos[i].aVel+(pendulos[i].aVel/abs(pendulos[i].aVel))*c
  }
}
  
  