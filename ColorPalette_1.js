let font;
const colors = [0, 35, 140];


function preload() {
    font = loadFont('/fonts/AbrilFatface-Regular.ttf');
}

function setup() {
    createCanvas(windowWidth, 700);
    background(colors[0], colors[1], colors[2]);
    
    cursor(CROSS);
    displayTitle();
}

function draw() {
    // creating gradient by hovering a cursor
    for (let i = 0; i < colors.length(); i++) {
        colors[i] = mouseX / 3;
    }
}

function displayTitle() {
    // 'Palette'
    fill(255, 235, 255);
    textFont(font, 250);
    text('     \n  Palette', 30, 280);

    // 'Color'
    fill(255, 190, 190);
    textFont(font, 250);
    text('Color\n', 30, 350);

    // ': Distribution'
    fill('white');
    textFont(font, 40);
    text(': Distribution', 700, 350);

    // CIRCLES
    noStroke();
    fill(255, 190, 190); // pink color
    circle(900, 80, 130);
    circle(100, 50, 55);
    fill(255, 235, 255); // pinkish white
    circle(900, 100, 100);

    // 'Go!'
    fill('white');
    textFont(font, 40);
    text('Go!', 870, 130);

}