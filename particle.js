class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];

    for (let angle = 0; angle < 360; angle += 5) {
      this.rays.push(new Ray(this.pos, radians(angle)));
    }
  }

  updatePosition(x, y) {
    this.pos.set(x, y);
  }

  cast(boundary) {
    for (let ray of this.rays) {
      const point = ray.cast(boundary);

      if (point) {
        line(this.pos.x, this.pos.y, point.x, point.y);
      }
    }
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4);

    for (let ray of this.rays) {
      ray.show();
    }
  }
}
