let gap = 10;
let circleNum = 40;
let circleSize = 20;
let angle;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('black');
    noCursor();
    noStroke();
    fill('white');
    circle(mouseX, mouseY, 5);


    ///////
    push();
    translate(width / 2, height / 2);
    rotate();
    noFill();
    stroke('white');
    strokeWeight(1);

    /////
    for (let i = 0; i < circleNumber; ++i) {
        circle(0, 0, circleSize + gap * i);
    }
    pop();
}