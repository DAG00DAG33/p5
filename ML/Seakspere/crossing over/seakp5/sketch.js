var target;
var popmax;
var mutationRate;
var population;

var bestPhrase;
var allPhrases;
var stats;

function setup(){
  bestPhrase = createP("Best Phrase:");
  //bestPhrase.position(10,10);
  bestPhrase.class("best");
  
  allPhrases = createP("All phrases");
  allPhrases.position(600, 10);
  allphrases.class("all");
  
  stats =createP("Stats");
  //stats.position(10,200);
  stats.class("stats");
  
  //createCanvas(6040,360);
  target = "To be or not to be.";
  popmax = 200;
  mutationRate = 0.01;
  
  population = new Population(target, mutationRate, popmax)
  
  
  
  
}

function draw() {
  
  population.naturalSelection();
  population.generate();
  population.calcFitness();
  population.evaluate();




  if(population.isFinished()){
    noLoop();
  }
  displayInfo();
  
}
function displayInfo(){
  var answer = population.getBest();

  best.html("Best phrese:<br>" + answer);

  var statstext = "total generations:   " + population.generations;
  //statstext += "average fitness   "+floor(100*population.)
  statstext += "total population:   " + pop + "<br>";
  statstext += "mutationRate:   " + floor(mutationRate)

  stats.html(statstext);

  allPhrases.html("All phrases:" + population.allPhrases)
}