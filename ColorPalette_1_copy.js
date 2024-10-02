let font;
let img;
let palette;


function preload() {
    font = loadFont('/fonts/AbrilFatface-Regular.ttf');

    img = loadImage('/artworks/snow.png');
    palette = loadImage('/artworks/Palette.png');
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    background('white');

    showImages();
    displayText();
    
    
    cursor(CROSS);
}

function draw() {

}

function displayText() {
    // ': Distribution'
    fill('black');
    textFont(font, 50);
    text('Primary\nSecondary\nTertiary', 50, 580);
    // text('Primary', 50, 500);

    //### Primary Color (Dominant) = 60%
    //### Secondary Color (Subordinate) = 30%
    //### Tertiary Color (Accent) = 10%

}

function showImages() {
    // Display the image.
  image(img, 0, 50, 800, 462);
  image(palette, 500, 510, 300, 100)

  noStroke();
  fill(255, 190, 190); // pink color
  circle(900, 80, 130);
  circle(100, 50, 55);

  fill(255, 235, 255); // pinkish white
  circle(900, 100, 70);
}