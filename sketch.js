// draw a spinning box
// with width, height and depth of 50
function setup() {
    createCanvas(600, 500, WEBGL);
    describe('a green box rotating in 3D space');
  }
  
  function draw() {
    background(200);
    fill(0, 255, 0)
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(110);
  }