class Point {

  constructor(x = null, y = null) {
    if (x !== null && y !== null) {
      this.x = x_;
      this.y = y_;
    } else {
      this.x = random(-10, 10);
      this.y = random(-10, 10);

    }

    if (this.x > this.y) {
      this.label = 1;
    } else {
      this.label = -1;
    }
  }


  show() {
    push();
    noFill();
    if (this.label === 1) {
      stroke(0, 0, 255);
    } else {
      stroke(0);
    }
    ellipse(this.getX(), this.getY(), 16);
    pop();
  }

  getX() {
    return map(this.x, -10, 10, 0, width);
  }

  getY() {
    return map(this.y, -10, 10, height, 0);
  }



}