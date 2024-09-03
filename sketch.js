let boundary;
let particle;
function setup() {
  createCanvas(400, 400);
  boundary = new Boundary(100, 100, 300, 300);
  particle = new Particle();
}

function draw() {
  background(0);
  boundary.show();
  particle.show();
  particle.updatePosition(mouseX, mouseY);
  particle.cast(boundary);
}
