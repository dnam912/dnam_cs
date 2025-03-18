
// Function for second canvas
function sketch2(p) {
    p.setup = function () {
        p.createCanvas(600, 500);
        p.background(0, 255, 0);
        p.fill(0);
        p.stroke(255);
    };
    p.draw = function () {
        

    };
}

new p5(sketch2);


