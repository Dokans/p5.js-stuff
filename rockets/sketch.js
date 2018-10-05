let population;
let maxFrameCount = 500;
let finalPoint;
let maxForce = 0.2;
let generationCount = 1;
let counter;
let slider;
let fps;
let successRate;
let firstArrived;

let rx = 200;
let ry = 300;
let wx = 350;
let wy = 20;

function setup() {
    createCanvas(600, 600);
    finalPoint = createVector(width/2, 30);
    population = new Population();
    
    counter = createP();
    slider = createSlider(1, 50, 1, 1)
    fps = createP();
    successRate = createP();
    firstArrived = createP()
}

function draw() {
    for(let j = 0; j < slider.value(); j++){
        background(0);
        
        fps.html(frameRate());
        counter.html(generationCount);
        
        population.showPopulation();
        

        if(population.rockets[0].count === maxFrameCount){
            //console.log(population);
            population.evaluate();
            population.select();
            generationCount++;

            successRate.html(population.successRate);
            firstArrived.html(population.firstArrived);
        
        }

        
        ellipse(finalPoint.x, finalPoint.y, 10);
        push();


        rectMode(CENTER);
        rect(rx, ry, wx, wy);
        pop();
    }
}