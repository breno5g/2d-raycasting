let walls = [];
let particle;

let xoff = 0;
let yoff = 10000;

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
  // particle.updatePosition(noise(xoff) * width, noise(yoff) * height);
  particle.cast(walls);

  // xoff += 0.01;
  // yoff += 0.01;
}
