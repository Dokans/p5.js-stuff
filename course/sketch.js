let point;
let border;


function setup() {
  createCanvas(600, 600);
  
  border = new Border();
  point = border.spawnPoint();
  
}



function draw() {
  background(0);
  checkKeys();
  point.update();
  border.showWalls();
  point.show();
}



function checkKeys() {
  if (keyIsDown(65)) {
    point.applyForce(createVector(-1, 0))
  }
  if (keyIsDown(68)) {
    point.applyForce(createVector(1, 0))
  }
  if (keyIsDown(87)) {
    point.applyForce(createVector(0, -1))
  }
  if (keyIsDown(83)) {
    point.applyForce(createVector(0, 1))
  }

}