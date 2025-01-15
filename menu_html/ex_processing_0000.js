function setup() {
    createCanvas(800, 800);
    background(255, 0, 0);
}

function draw() {
    // ellipse(
    //     mouseX,
    //     mouseY,
    //     100 * sin(frameCount / 30),
    //     100 * sin(frameCount / 100)
    // );

    let x = 0;
    let y = 0;

    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            ellipse(
                x,
                y,
                30 * sin(i * (frameCount / 300)),
                30 * sin(i * (frameCount / 1000))
            );
            x = x + 30;
        }
        x = 0;
        y = y + 30;
    }
}
