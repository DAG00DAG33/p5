// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Genetic Algorithm, Evolving Shakespeare

// A class to describe a pseudo-DNA, i.e. genotype
//   Here, a virtual organism's DNA is an array of character.
//   Functionality:
//      -- convert DNA into a string
//      -- calculate DNA's "fitness"
//      -- mate DNA with another set of DNA
//      -- mutate DNA

function newChar() {
  var c = floor(random(63,122));
  if (c === 63) c = 32;
  if (c === 64) c = 46;

  return String.fromCharCode(c);
}

// Constructor (makes a random DNA)
function DNA2(num) {
  // The genetic sequence
  this.genes = [];
  this.parentGenes=[]
  this.fitness = 0;
  this.changes = [0.001, 1, 1];
  for (var i = 0; i < num; i++) {
    this.genes[i] = floor(random(9.9));  // Pick from range of chars
  }
  this.genes[0]=0.1

  // Converts character array to a String
  this.getPhrase = function() {
    return this.genes//.join("");
  }

  // Fitness function (returns floating point % of "correct" characters)
  this.calcFitness = function(target) {
     var score = target.length*10;
     for (var i = 0; i < this.genes.length; i++) {
        score = score - abs(this.genes[i]-target[i]);
     }
     //this.fitness=score/(target.length*10);
     this.fitness=map(score,0,target.length*10,0,1);
     this.fitness = this.fitness+random(0.00005);
     print(score);
  }

  // Crossover
  this.crossover2 = function(partner) {
    // A new child
    var child = new DNA(this.genes.length);
    
    var midpoint = random(this.genes.length); // Pick a midpoint
    
    // Half from one, half from the other
    for (var i = 0; i < this.genes.length; i++) {
      if (i > midpoint) child.genes[i] = this.genes[i];
      else              child.genes[i] = partner.genes[i];
    }
    return child;
  }
  this.getGen = function(gen){
    return this.genes[gen];
  }
  

  // Based on a mutation probability, picks a new random character
  this.mutate = function(j) {
    var change = 0;

    if(j/2-floor(j/2)==0){
     change = 1;
    }  
    else{
     change = -1;
    }
    this.genes[floor(j/2)] += change*this.changes[floor(j/2)];
    if(this.genes[1]<this.genes[2]) this.genes[2]=this.genes[1]/2;
      
    
  }
    
}