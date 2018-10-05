class Dna{

    constructor(parent){
        let forces = [];

        if(parent === undefined){
            for (let i = 0; i < maxFrameCount; i++){
              let x = p5.Vector.random2D().mult(floor(random(1, 10)));
              x.limit(maxForce);
              forces.push(x);
            }
            this.forces = forces;
        }else{
            this.forces = parent;
        }

    }

    merge(partnerDna){

        let forces = [];
        
        for(let j = 0; j < maxFrameCount; j++){
            if(random(0, 1) > 0.5){
                forces[j] = this.forces[j];
            }else{
                forces[j] = partnerDna.forces[j];
            }
        }
        

        return new Dna(forces);
    }

    mutate(){

        for(let j = 0; j < maxFrameCount; j++){

            if(random() >= 0.9){
                this.forces[j] = p5.Vector.random2D();
                this.forces[j].limit(maxForce);
            }

        }
    }


}