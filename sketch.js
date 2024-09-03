let boundary;
let ray;
function setup() {
  createCanvas(400, 400);
  boundary = new Boundary(300, 100, 300, 300);
  ray = new Ray(100, 200);
}

function draw() {
  background(0);
  boundary.show();
  ray.show();
  ray.lookAtPoint(mouseX, mouseY);

  let point = ray.cast(boundary);

  if (point) {
    fill(255, 0, 255);
    ellipse(point.x, point.y, 10, 10);
  }
}
