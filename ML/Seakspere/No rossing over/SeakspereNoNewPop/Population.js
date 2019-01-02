// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Genetic Algorithm, Evolving Shakespeare

// A class to describe a population of virtual organisms
// In this case, each organism is just an instance of a DNA object

function Population(p, m, num) {

  this.population;  
  this.ranking;
  this.generations = 0;              // Number of generations
  this.finished = false;             // Are we finished evolving?
  this.target = p;                   // Target phrase
  this.mutationRate = m;             // Mutation rate
  this.perfectScore = 1;
  this.newPopulation;


  this.best = "";

  this.population = [];
  this.ranking=[];
  this.newPopulation = [];
  for (var i = 0; i < num; i++) {
    this.population[i] = new DNA(this.target.length);
  }

  // Fill our fitness array with a value for every member of the population
  this.calcFitness = function() {
    for (var i = 0; i < this.population.length; i++) {
      this.population[i].calcFitness(target);
    }
  }
  this.calcFitness();

  // Generate a mating pool
  this.naturalSelection = function(survivors) {
    // Clear the ArrayList
    var maxFitness = 0;
    for (var i = 0; i < this.population.length; i++) {
      if (this.population[i].fitness > maxFitness) {
        maxFitness = this.population[i].fitness;
      }
    }

    for (var i = 0; i < this.population.length; i++) {
      var rankingH=0;
      for (var j = 0; j<this.population.length; j++) {
        if(this.population[i].fitness<this.population[j].fitness){
          rankingH++;
        }
        
      }
      this.ranking[i]=rankingH;
    }
    this.newPopulation=[];
    for(var i=0;i<this.population.length;i++){
      if(this.ranking[i]<survivors){
        this.newPopulation.push(this.population[i]);
      }
    }

    
  }

  // Create a new generation
  this.generate = function(survivors, deaths) {
    this.generations++;
    var k=0;
    k=this.newPopulation.length

    print(this.newPopulation.length);

    for(var j=0;i<deaths/survivors;j++){
      for(var i=0;i<k;i++){ 
        var child = this.newPopulation[i];
        child.mutate(this.mutationRate);
        //var h = j*survivors+i+survivors;
        this.newPopulation[i+survivors]=child;
      }
    }
    print(this.newPopulation.length+"a");

    this.population=[];
    //arrayCopy(this.newPopulation,this.population);
    for(i=0;i<this.newPopulation.length;i++){
      this.population[i]=this.newPopulation[i];
    }


  }
  


  this.getBest = function() {
    return this.best;
  }

  // Compute the current "most fit" member of the population
  this.evaluate = function() {
    var worldrecord = 0.0;
    var index = 0;
    for (var i = 0; i < this.population.length; i++) {
      if (this.population[i].fitness > worldrecord) {
        index = i;
        worldrecord = this.population[i].fitness;
      }
    }

    this.best = this.population[index].getPhrase();
    if (worldrecord === this.perfectScore) {
      this.finished = true;
    }
  }

  this.isFinished = function() {
    return this.finished;
  }

  this.getGenerations = function() {
    return this.generations;
  }

  // Compute average fitness for the population
  this.getAverageFitness = function() {
    var total = 0;
    for (var i = 0; i < this.population.length; i++) {
      total += this.population[i].fitness;
    }
    return total / (this.population.length);
  }

  this.allPhrases = function() {
    var everything = "";
    
    var displayLimit = min(this.population.length,50);
    
    
    for (var i = 0; i < displayLimit; i++) {
      everything += this.population[i].getPhrase() + "<br>";
    }
    return everything;
  }
}


