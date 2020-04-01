let mode = 0;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(2);
}

function draw() {
  fill(255, 102, 0)
  textSize(20);
  text('1 = montagne  2 = building 3 = ligne horizontale  4 = ligne verticale 5 = cercle', 10, windowHeight - 10);
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
    if (mode == 2) {
      stroke(0, 255, 0);
      line(mouseX, mouseY, mouseX + 150, mouseY);
    }

    if (mode == 3) {
      stroke(0, 255, 0);
      line(mouseX, mouseY, mouseX, mouseY + 125);
    }
    if (mode == 4) {
      stroke(255, 102, 0);
      circle(mouseX, mouseY, 150);
    }


  }

}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    background(0);
  }

  if (keyCode == ENTER) {
    save(canvas, "monnsuperdessin.jpg");
  }

  if (key == "1") {
    mode = 0;
  }
  if (key == "2") {
    mode = 1;
  }
  if (key == "3") {
    mode = 2;
  }
  if (key == "4") {
    mode = 3;
  }
  if (key == "5") {
    mode = 4;
  }


}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}