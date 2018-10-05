const gravityConst = 6.67 * Math.pow(10, -20);
let bodies = [];
let sun = [];
function setup() {

  createCanvas(windowWidth, windowHeight);

  //sun(s)
  sun[0] = new CelestialBody(width/2-200, height/2, 0, 30, 100);
  sun[1] = new CelestialBody(width/2+200, height/2, 0, 30, 100);

  //create random other objects;
  for(let j = 0; j < 0; j++){
    let vel = p5.Vector.random2D().setMag(0.5);
    let x = random(height);
    let y = random(width);
    let mass = random(1, 5);
    let radius = random(1, 15);
    bodies.push(new CelestialBody(x, y, vel, radius, mass));
  }
  bodies.push(new CelestialBody(width/2-25, height-40, p5.Vector.random2D().setMag(300), 5, ));
  
}

function draw() {
  background(0);
  for(let object of bodies){
    object.getGravityForces(bodies);
    object.getGravityForces(sun);
    object.update();
    object.show();
  }

  //show sun(s)
  sun[0].show();
  sun[1].show();
}


