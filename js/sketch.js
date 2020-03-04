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
    curve(width / 2, height / 2, width / 2, mouseY, mouseX, mouseY, mouseY, mouseX);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}