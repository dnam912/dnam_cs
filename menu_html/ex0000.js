let radius = 200;

// let density;
// let densitySlider;


function setup() {
    createCanvas(700, 700, WEBGL);
    angleMode(DEGREES);
    colorMode(HSB);

    stroke(199, 80, 88);
    strokeWeight(3);
    noFill();


    // density = createDiv();
    // densitySlider = createSlider(3, 50, 30, 1); // values for min, max, default, stepSize
}


function draw() {
    background(230, 50, 15);
    orbitControl(10, 4);

    // rotateY(90);
    // rotateZ(65);

    for (let phi = 0; phi < 180; phi +=5) { // half sphere
        // beginShape();

        // for (let theta = 0; theta < 360; thta +=5) {

            let x = radius * cos(phi);
            let y = radius * sin(phi);
            let z = radius * sin(phi);
            point(x, y, z);

            // let y = radius * sin(phi) * sin(theta);
            // let z = radius * sin(phi) * cos(theta);
            //vertex(x, y, z);
        // }
        
        // endShape(CLOSE);
    }

    // let displayDensity = int(map(densitySlider.value(), 5, 60, 1, 60));
    // density.html("Density value: " + displayDensity);
}
