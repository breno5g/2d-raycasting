let walls = [];
let particle;

let xoff = 0;
let yoff = 10000;

function initCanvas() {
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;

  if (screenWidth > 800) {
    screenWidth = 800;
  }
  if (screenHeight > 800) {
    screenHeight = 800;
  }

  createCanvas(screenWidth - 50, screenHeight - 50);
}

function setup() {
  initCanvas();
  // createCanvas(400, 400);
  // boundary = new Boundary(100, 100, 300, 300);
  particle = new Particle();
  walls = Boundary.createRandom(10);
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
