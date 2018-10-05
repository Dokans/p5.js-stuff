let data = [];
let parsedData = [];


function setup() {
  
  createCanvas(1000, 1000, WEBGL)
  //translate(width/2, height/2);
  loadStrings("data.txt", parseData);
  console.log(data);
  
}



function draw() {
  //console.log(data);
  translate(width, height, width);
  background(0);
  stroke(255, 255, 255);
  //strokeWeight(3);
  beginShape(POINTS);
  for(let i = 0; i < data.length; i++){
    vertex(data[i][0], data[i][1], data[i][2]);
  }
  endShape();

}

function parseData(result){
  

  for(let i = 0; i < result.length; i++){
    let x =result[i].split(", ");
    data.push(x);
}

}
