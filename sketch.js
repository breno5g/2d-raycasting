let walls = [];
let particle;
function setup() {
  createCanvas(400, 400);
  // boundary = new Boundary(100, 100, 300, 300);
  particle = new Particle();
  walls = Boundary.createRandom(5);
}

function draw() {
  background(0);
  walls.forEach((wall) => {
    wall.show();
  });

  particle.show();
  particle.updatePosition(mouseX, mouseY);
  particle.cast(walls);
}
