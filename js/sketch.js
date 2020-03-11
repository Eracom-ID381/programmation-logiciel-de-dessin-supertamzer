let mode = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    stroke(2);
}

function draw() {
    noFill();
    strokeWeight(1);
    //curve(width / 2, height / 2, mouseX, height - 100, mouseX, mouseY, mouseY, mouseX);
    //mouseY < height - 100
    if (mouseIsPressed) {
        if (mode == 0 && mouseY < 500) {
            stroke(255, 102, 0);
            curve(width / 2, height / 2, mouseX, 500, mouseX, mouseY, mouseY, mouseX);

        }
        if (mode == 1) {
            stroke(0, 255, 0);
            //line(mouseX, mouseY, mouseX, mouseY + height)
            //line(mouseX, mouseY, mouseX + 250, mouseY);
            //line(mouseX + 250, mouseY, mouseX + 250, mouseY + height)
            curve(width / 2, height / 2, width / 2, mouseY, mouseX, mouseY, mouseY, mouseX);
        }
    }



}

function keyPressed() {
    if (keyCode === BACKSPACE) {
        background(0);
    }
    if (key == "1") {
        mode = 0;
    }
    if (key == "2") {
        mode = 1;
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}