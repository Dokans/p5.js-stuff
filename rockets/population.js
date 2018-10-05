class Population{
    constructor(){
        this.popSize = 40;
        this.parents = [];
        let rockets = [];
        let successRate = 0;
        let firstArrived = 0;

        for(let k = 0; k < this.popSize; k++){
            rockets.push(new Rocket());
        }

        this.rockets = rockets;

    }
    
    showPopulation(){
        for(let j = 0; j < this.popSize; j++){
            this.rockets[j].update().show();
        }
    }

    evaluate(){
        this.successRate = 0;
        let bestFittness = 0;
        this.firstArrived = maxFrameCount;
        
        for(let j = 0; j < this.popSize; j++){
            if(this.rockets[j].arrived){
                this.successRate += 1;
                if(this.rockets[j].count){
                    this.firstArrived = this.rockets[j].count;
                 }
            }

            this.rockets[j].calculateFittness();
            
            if(this.rockets[j].fittness > bestFittness){
                bestFittness = this.rockets[j].fittness;
            }
        }

        this.successRate /= this.popSize;

        for(let j = 0; j <this.popSize; j++){
            this.rockets[j].fittness /= bestFittness;
        }

        this.parents = [];

        for(let k = 0; k < this.popSize; k++){
            let n = this.rockets[k].fittness * 100;

            for(let l = 0; l < n; l++){
                this.parents.push(this.rockets[k]);
            }
        }
    }

    select(){
        let childrens = [];


        for(let j = 0; j < this.popSize; j++){
            let parentA = random(this.parents).dna;
            let parentB = random(this.parents).dna;

            let child = parentA.merge(parentB);
            child.mutate();

           childrens[j] = new Rocket(child);
        }

        this.rockets = childrens;
    }

    
}