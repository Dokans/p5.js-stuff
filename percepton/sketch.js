let percepton;
let points = [];
function setup() {
  
  let error = 0;


  createCanvas(500, 500);
  percepton = new Percepton();
  background(255);
  for (let j = 0; j < 40; j++) {
    points[j] = new Point();
    points[j].show();
  }

  line(0, height, width, 0);
}

function draw() {
  for(let j = 0; j < points.length; j++){
    let inputs =  [points[j].x, points[j].y];
    let guess = percepton.guess(inputs);

    if(guess === points[j].label){
      noStroke();
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    ellipse(points[j].getX(),points[j].getY(), 15);

    percepton.train(inputs, points[j].label);

    setTimeout(() => {
      
    }, 10000000);
  }
}




function mouseClicked(){



}