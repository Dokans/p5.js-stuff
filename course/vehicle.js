class Point {

    constructor(x, y) {
      this.pos = createVector(x, y);
      this.vel = createVector(0, 0);
      this.acc = createVector(0, 0);
    }
  
    applyForce(force) {
      this.acc.add(force);
    }
  
    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.vel.mult(0.9);
    }
  
    show() {
      push();
      //translate(this.pos.x, this.pos.y);
      fill(255);
      ellipse(width / 2, height / 2, 25);
      pop();
    }
  
  }
  
  