class Rocket {
    constructor(dna){
        this.pos = createVector(width/2, height-5);
        this.vel = createVector();
        this.acc = createVector();
        this.count = 0;
        this.arrived = false;
        this.collieded = false;
        this.fittness;

        if (dna instanceof Dna){
            this.dna = dna;
        } else {
            this.dna = new Dna();
        }
    }

    update() {
        if(!this.arrived && !this.collieded){
            this.addForce(this.dna.forces[this.count]);
            this.vel.add(this.acc);
            this.vel.limit(4);
            this.pos.add(this.vel);
            
            this.acc.mult(0);
        
            if(dist(this.pos.x, this.pos.y, finalPoint.x, finalPoint.y) <= 20){
                this.arrived = true;
                this.pos = finalPoint.copy();
            }

            this.checkCollissons();
            this.count++;
        }
        this.count++;
        return this;
    }

    addForce(force){
        this.acc.add(force);
    }

    checkCollissons(){
        if(this.pos.x >= width || this.pos.x <= 0){
            this.collieded = true;
            this.vel.mult(0);
        }

        if(this.pos.y >= height || this.pos.y <= 0){
            this.collieded = true;
            this.vel.mult(0);
        }

        if(this.pos.x <= rx+wx/2 && this.pos.x >= rx-wx/2 && this.pos.y <= ry+wy/2 && this.pos.y >= ry-wy/2){
            this.collieded = true;
            this.vel.mult(0);
        }
    }

    show(){
        push();
            translate(this.pos.x, this.pos.y);
            rotate(this.vel.heading());
            rectMode(CENTER);
            noStroke();
            fill(255, 255, 255, 100)
            rect(0, 0, 20, 10);
        pop();
    }

    calculateFittness(){
        let d = dist(this.pos.x, this.pos.y, finalPoint.x, finalPoint.y);
        let time = this.count
        let fittness = map(d, 0, width, width, 0);

        if(this.collieded){
            fittness /= 1000;
        }
        
        if(this.arrived){
            fittness *= 100;
            fittness *= maxFrameCount - this.count
        }

        this.fittness = fittness;
    }
}