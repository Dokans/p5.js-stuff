
let mirror;
let positionOfMirror = 50;

//100px = 1m
let origCandel;
let refCandel;

let objectPosition;
let objectHeight;
let mirrorFocusLenght;


function setup() {
  createCanvas(600, 300);
  mirror = new Mirror(30);


  createP('Size of object');
  objectHeight = createSlider(10, 100, 50, 10);

  createP('Position of object');
  objectPosition = createSlider(0, width, width / 2, 10);

  createP('Focus of mirror');
  mirrorFocusLenght = createSlider(-200, 200, 100, 10);

  origCandel = new Candel(objectHeight.value(), objectPosition.value(), false);
  refCandel = new Candel();
}

function draw() {
  stroke(255)

  background(0);
  line(0, height / 2, width, height / 2);
  mirror.focusLenght = mirrorFocusLenght.value();
  mirror.draw();

  origCandel.position = objectPosition.value();
  origCandel.height = objectHeight.value();

  mirror.Reflect(origCandel.getDistanceFromMirror(), origCandel.height);
  origCandel.draw();
  refCandel.draw();

  push();
  stroke(255, 0, 0);
  fill(255, 0, 0);
  ellipse(width - positionOfMirror - mirror.focusLenght, height / 2, 4);
  stroke(0, 255, 0);
  fill(0, 255, 0);
  ellipse(width - positionOfMirror - mirror.focusLenght * 2, height / 2, 4);
  pop();
}

class Mirror {

  constructor(focusLenght) {

    if (focusLenght === undefined) {
      focusLenght = 100;
    } else {
      this.focusLenght = focusLenght;
    }

  }

  draw() {
    push();
    translate(width - positionOfMirror - this.focusLenght*2, height / 2);
    strokeWeight(3);
    noFill();
    arc(0, 0 , this.focusLenght * 2, -PI / 5, PI / 5, false);
    pop();
  }

  Reflect(distacnceOriginal, heightOriginal) {

    let refDist = 1 / ((1 / this.focusLenght) - (1 / distacnceOriginal));

    refCandel.setPositionFromMirror(refDist);
    refCandel.height = (refDist * heightOriginal) / distacnceOriginal;
    refCandel.mag = refDist / distacnceOriginal;

  }

  /* drawReflection(reflctObject) {
    rect(width - reflctObject.distacnce - 5 * reflctObject.mag - positionOfMirror, height / 2, 10 * reflctObject.mag, reflctObject.height);
  } */


}

class Candel {

  constructor(height, position, reflaction) {
    if (height === undefined) {
      height = 100;
    }
    if (reflaction) {
      setPositionFromMirror();
    } else {
      this.position = position;
    }

    this.height = height;

    this.mag = 1;
  }

  getDistanceFromMirror() {
    return width - positionOfMirror - this.position;
  }

  setPositionFromMirror(distance) {
    this.position = width - positionOfMirror - distance;
  }

  draw() {
    rect(this.position - 5 * this.mag, height / 2, 10, -this.height);
  }

}