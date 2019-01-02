
// setup()
//  # Step 1: The Population 
//    # Create an empty population (an array or ArrayList)
//    # Fill it with DNA encoded objects (pick random values to start)

// draw()
//  # Step 1: Selection 
//    # Create an empty mating pool (an empty ArrayList)
//    # For every member of the population, evaluate its fitness based on some criteria / function, 
//      and add it to the mating pool in a manner consistant with its fitness, i.e. the more fit it 
//      is the more times it appears in the mating pool, in order to be more likely picked for reproduction.

//  # Step 2: Reproduction Create a new empty population
//    # Fill the new population by executing the following steps:
//       1. Pick two "parent" objects from the mating pool.
//       2. Crossover -- create a "child" object by mating these two parents.
//       3. Mutation -- mutate the child's DNA based on a given probability.
//       4. Add the child object to the new population.
//    # Replace the old population with the new population
//  
//   # Rinse and repeat


var target;
var popmax;
var mutationRate;
var population;
var maxmut;
var die;
var survivors;

var bestPhrase;
var allPhrases;
var stats;

var dif;

function setup() {

  bestPhrase = createP("Best phrase:");
  //bestPhrase.position(10,10);
  bestPhrase.class("best");

  allPhrases = createP("All phrases:");
  allPhrases.position(600,10);
  allPhrases.class("all");

  stats = createP("Stats");
  //stats.position(10,200);
  stats.class("stats");
  
  //createCanvas(60, 360);
  target = "To be or not to be.";
  mutationRate = 0.05;
  mutIncrement = 0.000003
  maxmut=0.05;
  popmax = 9;
  //maxmut=0.1;
  die= 8;
  survivors= popmax-die;

  simulator = new Simulator(target, popmax);



  // Create a population with a target phrase, mutation rate, and population max
}

function draw() {
  //calcFitness2(target, mutationRate, maxmut, mutIncrement, die, popmax, survivors);
  //mutationRate += 0.00003;//*population.getGenerations()
  //if(mutationRate>maxmut) mutationRate=maxmut;


  
  simulator.calcFitness();

  simulator.evaluate();

  displayInfo();

  // Generate mating pool
  simulator.naturalSelection(survivors);
  //Create next generation
  simulator.generate(survivors,die);
  // Calculate fitness
  

  // If we found the target phrase, stop
  if (simulator.isFinished()) {
    //println(millis()/1000.0);
    noLoop();
  }
    
  


}

function clacFitness2(target1, mutationRate1, maxmut1, mutIncrement1, die1, popmax1, survivors1){
    //population = new Population(target1, mutationRate1, popmax1);
    //while(i=0){
  

    //return population.getGenerations()*die ;
}

function displayInfo() {
  // Display current status of population
  var answer = simulator.getDie();
  
  bestPhrase.html("Best phrase:<br>" + simulator.getRecord()*1000000000000000000000000);
  
  var statstext = "total generations:     " + simulator.getGenerations() + "<br>";
  statstext +=    "average fitness:       " + simulator.getAverageFitness()//nf(simulator.getAverageFitness(),20,20) + "<br>";
  statstext +=    "mutation rate:         " + simulator.getMut()* 100 + "%" + "<br>";
  statstext +=    "people:                " + simulator.getPop() + "<br>"  
  statstext +=    "Deaths:                " + simulator.getDie() + "<br>"
  statstext +=    "gens Length:           " + target.length + "<br>"
  stats.html(statstext);

  //allPhrases.html("All phrases:<br>" + population.allPhrases())
}
