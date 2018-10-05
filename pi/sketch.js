let radius = 200;
let inCircle = 0;
let total = 0;
let piAprox;
let center;

function setup() {
  createCanvas(400, 400);
  background(0);
  piAprox = createP();

  center = createVector(width/2, height/2);
  
  push();
  stroke(255, 0, 0, 150);
  noFill();
  ellipse(width/2, height/2, radius*2);
  pop();
}

function draw() {
  for(let j = 0; j < 1000; j++){
    let randomPoint = createVector(floor(random(0, width)), floor(random(0, height)))
    
    if(center.dist(randomPoint) >= radius){
      push();
      stroke(0, 255, 0);
      point(randomPoint.x, randomPoint.y);
      pop();
      
    }else{
      inCircle++;
      push();
      stroke(0, 0, 255);
      point(randomPoint.x, randomPoint.y);
      pop();
    }
    total++;

    let piGuess = (4*inCircle)/total; 

    piAprox.html(piGuess);
  }
}