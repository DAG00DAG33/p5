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
function DNA(num) {
  // The genetic sequence
  this.genes = [];
  this.parentGenes=[]
  this.fitness = 0;
  this.ranking = 0
  for (var i = 0; i < num; i++) {
    this.genes[i] = newChar();  // Pick from range of chars
    }

  // Converts character array to a String
  this.getPhrase = function() {
    return this.genes.join("");
  }

  // Fitness function (returns floating point % of "correct" characters)
  this.calcFitness = function(target) {
     var score = 0;
     for (var i = 0; i < this.genes.length; i++) {
        if (this.genes[i] == target.charAt(i)) {
          score++;
        }
     }
     this.fitness = score / target.length;
     this.fitness = pow(this.fitness, 2)+random(0.00005);
  }

  

  // Crossover
  

  // Based on a mutation probability, picks a new random character
  this.mutate = function(mutationRate) {
    for (var i = 0; i < this.genes.length; i++) {
      if (random(1) < mutationRate) {
        this.genes[i] = newChar();
      }
    }
  }
    
}