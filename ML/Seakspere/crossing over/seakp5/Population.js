function Population(p, m, num){
 
 this.population;
 this.matingPool;
 this.generations = 0;
 this.finished = false;
 this.target = p;
 this.mutationRate = m;
 this.perfectScore=1;
 
 this.best= "";
 
 this.population = [];
 for (var i = 0; i < num; i++) {
   this.population[i] = new DNA(this.target.length);
 }
 this.matingPool = [];
 
 
 
 this.calcFitness = function(){
   for (var i = 0; i<this.population.length; i++){
     this.population[i].calcFitness(target);
   }
 }
 this.calcFitness();
 
 
 this.naturalSelection = function(){
   this.matingPool = [];
   
   var maxFitness = 0;
   for (var i = 0; i<this.population.length; i++){
     if(this.population[i].fitness > maxFitness){
       maxFitness = this.population[i].fitness;
     }
   }
   
   
   for (var i=0; i<this.population.length;i++){
     var fitness = map(this.population[i].fitness,0,maxFitness, 0, 1);
     var n = floor(fitness*100);
     for(var j = 0;j<n;j++)
      this.matingPool.push(this.population[i]);
   }
 }
 this.generate = function(){
  for (var i = 0; i < this.population.length; i++) {
    var a = floor(random(this.matingPool.length));
    var b = floor(random(this.matingPool.length));
    var partnerA = this.matingPool[a];
    var partnerB = this.matingPool[b];
    var child = partnerA.crossover(partnerB);
    child.mutate(this.mutationRate);
    this.population[i] = child;
  }
  this.generations++;
 }

  
}