let mySound;
let wave = [];
let durationTime = 0;
let sampleRate = 0;

function preload(){
  let i = 0;
  mySound = loadSound("samples/sandstorm.mp3");
  while(!mySound.isLoaded()){
    setTimeout(console.log(i), 1000);
    i++;
  }
}

function setup() {
  durationTime = mySound.duration();
  wave = mySound.getPeaks(mySound.frames());
  sampleRate = mySound.sampleRate();
  
  
  
  mySound.setVolume(0.2);
  
  
  createCanvas(windowWidth, 200);
  background(0);
  stroke(255);
  

  noFill();
  beginShape("LINE")
  let space = width/wave.length;
 
  for(let j = 0; j < wave.length; j++){  
    let x = j*space;
    let y = height/2 + wave[j]*100;
    vertex(x, y);
  }
  endShape();
  frameRate(sampleRate);

}

function draw() {
  
  let t = mySound.currentTime();

  noFill();
  stroke(255, 255, 0);
  beginShape("LINE");
    let space = width/wave.length;
    for(let j = 0; j < t*sampleRate; j++){
      
      let x = j*space;
      let y = height/2 + wave[j]*100;
      vertex(x, y);
    }  
  endShape();



}