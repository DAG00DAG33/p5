//DIBUJOS BONITOS
/*len1=200;len2=200;angle1=88;angle2=90;aVel1=0;aVel2=0*/

var pendulos = []
var grav=-10
var t=0

function setup() {
  angleMode(DEGREES);
  frameRate(1000)

  createCanvas (500,500);

  for (var i = 0; i < 1; i++) {
    pendulos[i] = new pendulo();
  }
 
  stats = createP("Stats");
  stats.class("stats");
  }

function draw() {
  background(255);
  translate(250,250)
  t = t + 1
  for(var i = 0; i<pendulos.length;i++){
    pendulos[i].move()
    pendulos[i].draw()


    //DRAG
    /*var c=-0.000001
    pendulos[i].aVel1=pendulos[i].aVel1+(pendulos[i].aVel1/abs(pendulos[i].aVel1))*c
    pendulos[i].aVel2=pendulos[i].aVel1+(pendulos[i].aVel2/abs(pendulos[i].aVel2))*c*/
    //var a=pendulos[i].aVel2

  
}
//ellipse(sin(t*grav)*250,100,6,6)
var statstext = pendulos[0].angle1-(sin(t*grav)*90)
stats.html(statstext);
} 