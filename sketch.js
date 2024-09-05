let walls = [];
let particle;

let xoff = 0;
let yoff = 10000;

let checkbox;

const createCheckboxToEnableNoiseMovement = () => {
  const label = document.createElement('label');
  label.innerHTML = 'Enable noise movement';
  checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  label.appendChild(checkbox);
  label.style.display = 'flex';
  label.style.margin = '0 10px 0 10px';
  label.style.gap = '10px';

  document.body.appendChild(label);
};

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

let slider;

function setup() {
  initCanvas();
  slider = createSlider(1, 36, 1, 1);
  particle = new Particle();
  walls = Boundary.createRandom(5);
  createCheckboxToEnableNoiseMovement();
}

function draw() {
  background(0);

  walls.forEach((wall) => {
    wall.show();
  });

  particle.show();
  particle.cast(walls);
  particle.updateAmount(37 - slider.value());

  if (checkbox.checked) {
    particle.updatePosition(noise(xoff) * width, noise(yoff) * height);
    xoff += 0.01;
    yoff += 0.01;
  } else {
    particle.updatePosition(mouseX, mouseY);
  }
}
