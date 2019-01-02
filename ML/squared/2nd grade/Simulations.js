// Daniel Shiffman
// http://natureofcode.com

// Genetic Algorithm, Evolving Shakespeare

// A class to describe a population of virtual organisms
// In this case, each organism is just an instance of a DNA object

function Simulator(p, num) {
  this.simulation; 


  this.averageFitness;
  this.Record;



  this.ranking2;
  this.alive2;  
  this.DNA2
  this.empSpaces2;
  this.fitness;

  this.generations2 = 0;              // Number of generations
  this.finished2 = false;             // Are we finished evolving?
  this.target = p;  
  this.simulation;                 // Target phrase
  this.perfectScore = 1;


  this.best = "";
  this.maxFitness2;
  this.bestMut;
  this.bestPop;
  this.bestDie;

  this.ranking2=[];
  this.fitness=[];
  this.alive2=[];
  this.empSpaces2=[];
  this.simulation = [];
  this.DNA2=[];
  for (var i = 0; i < num; i++) {
    this.DNA2[i] = new DNA2(3);
  }

  // Fill our fitness array with a value for every member of the population
  this.calcFitness = function() {
    //print("1")
    for (var i = 0; i < num; i++) {
      this.simulation[i] = new Population(this.target,this.DNA2[i].getGen(0),this.DNA2[i].getGen(1))
    }

    for (var i = 0; i < this.simulation.length; i++) {
      //print(i, this.generations2);
      var j = 0;
      while(j=0){
        this.simulation[i].calcFitness();
        this.simulation[i].evaluate();
        this.simulation[i].naturalSelection(this.DNA2[i].getGen(1)-this.DNA2[i].getGen(2));
        this.simulation[i].generate(this.DNA2[i].getGen(1)-this.DNA2[i].getGen(2),this.DNA2[i].getGen(2));
        if (this.simulation[i].isFinished()) j=1;
      }
      this.fitness[i]=this.simulation[i].getGenerations()*this.DNA2[i].getGen(2);
    }
    //print("2")
  }

  // Generate a mating pool
  this.naturalSelection = function(survivors2) {
    // Clear the ArrayList
    this.maxFitness2 = 0;
    for (var i = 0; i < this.simulation.length; i++) {
      if (this.fitness[i] > this.maxFitness2) {
        this.maxFitness2 = this.fitness[i];
        //print(this.maxFitness2);
      }
    }

    for (var i = 0; i < this.simulation.length; i++) {
      var rankingH2=0;
      for (var j = 0; j<this.simulation.length; j++) {
        if(this.fitness[i]<this.fitness[j]){
          rankingH2++;
        }  
      }
      this.ranking2[i]=rankingH2;
    }


    this.empSpaces2=[];
    for(var i=0;i<this.simulation.length;i++){
      if(this.ranking2[i]<survivors2){
        this.alive2[i]=true;
        this.bestMut=this.DNA2[i].getGen(0);
        this.bestPop=this.DNA2[i].getGen(1);
        this.bestDie=this.DNA2[i].getGen(2);


      }
      else{
        this.alive2[i]=false;
        this.empSpaces2.push(i);
      }
    }

    
  }

  // Create a new generation
  this.generate = function(survivors2, deaths2) {
    this.generations2++;
    var j2 = 0;
    for(var i = 0;i<this.simulation.length;i++){
      if(this.alive2[i]){
        for(var k = 0; k<deaths2/survivors2; k++){
          var a = i;
          var b = floor(random(this.simulation.length));          
          var partnerA = this.DNA2[a];
          var partnerB = this.DNA2[b];
          var child = partnerA.crossover2(partnerA);
          child.mutate(j2);
          this.DNA2[this.empSpaces2[j2]]=child;
          j2++
        }
      }
    }


  }
  


  this.getBestFitness = function() {
    return this.maxFitness2;
  }

  // Compute the current "most fit" member of the population
  this.evaluate = function() {
    var worldrecord = 0.0;
    var index = 0;
    for (var i = 0; i < this.simulation.length; i++) {
      print(this.fitness[i]+1)
      if (this.fitness[i] > worldrecord) {
        index = i;
        worldrecord = this.fitness[i];
      }
    }
    //print(worldrecord);

    this.best = this.fitness[i];//.getPhrase();
    if (floor(worldrecord) == this.perfectScore) {
      this.finished = true;
    }




  }
  this.getRecord = function(){
    var worldrecord = 0.0;
    for (var i = 0; i < this.simulation.length; i++) {
      if (this.fitness[i]> worldrecord) {
        index = i;
        worldrecord = this.fitness[i];
      }
    }
    return worldrecord;
  }

  this.isFinished = function() {
    return this.finished;
  }

  this.getGenerations = function() {
    return this.generations2;
  }

  // Compute average fitness for the population
  this.getAverageFitness = function() {
    //print("1");
    var total = 0;
    for (var i = 0; i < this.simulation.length; i++) {
      total += this.fitness[i];
    }
    //print(this.simulation[0].getFitness())
    return total / (this.simulation.length);
    
  }
  this.getMut = function(){
    return this.bestMut;
  }
  this.getPop = function(){
    return this.bestPop;
  }
  this.getDie = function(){
    return this.bestDie;
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
