function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    stroke(2);
}

function draw() {
    fill(255);
    noFill();
    strokeWeight(1);
    stroke(255, 102, 0);
    rectMode(CORNERS);
    rect(mouseX, mouseY, mouseX + 100, mouseY + 200);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}