class CelestialBody{

    constructor(x, y, vel, radius, mass){
        this.radius = radius;
        this.mass = mass;
        this.pos = createVector(x, y);
        this.vel = vel;
        this.acc = createVector();
        this.force = createVector();
    }

    getGravityForces(objects){
    
    for(let object of objects){
                
        this.force.add(this.calcForce(object.pos, object.mass))
    
    }

    }  

    calcForce(pos, mass){
        let distance = this.pos.dist(pos);        
        let mag = gravityConst*(mass*this.mass)/(dist*dist);
        
        let force = createVector(pos.x - this.pos.x, pos.y - this.pos.y);
        force.setMag(mag);

        return force;

    }

    update(){

        this.acc.add(this.force);
        this.vel.add(this.acc);
       // this.vel.limit(10);
        this.pos.add(this.vel);

        this.acc.mult(0);
        this.vel.mult(0);
    }

    show(){
        push();
        fill(255, 150);
        stroke(255);
        ellipse(this.pos.x, this.pos.y, this.radius);
        pop();
    }   

}