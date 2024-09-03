class Ray {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.dir = createVector(1, 0);
  }

  lookAtPoint(x, y) {
    this.dir.x = x - this.pos.x;
    this.dir.y = y - this.pos.y;
    this.dir.normalize();
  }

  show() {
    stroke(255);
    push();
    translate(this.pos.x, this.pos.y);
    line(0, 0, this.dir.x * 10, this.dir.y * 10);
    pop();
  }

  // [Wikipedia for this](https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection)
  cast(boundary) {
    const x1 = boundary.a.x;
    const y1 = boundary.a.y;
    const x2 = boundary.b.x;
    const y2 = boundary.b.y;

    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = x3 + this.dir.x;
    const y4 = y3 + this.dir.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    if (den == 0) {
      return false;
    }

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = (((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den) * -1;

    if (t > 0 && t < 1 && u > 0) {
      const point = createVector();
      point.x = x1 + t * (x2 - x1);
      point.y = y1 + t * (y2 - y1);
      return point;
    } else {
      return false;
    }
  }
}
