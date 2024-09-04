class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];

    for (let angle = 0; angle < 360; angle += this.amount) {
      this.rays.push(new Ray(this.pos, radians(angle)));
    }
  }

  updateAmount(amount) {
    let rays = [];
    for (let angle = 0; angle < 360; angle += amount) {
      rays.push(new Ray(this.pos, radians(angle)));
    }

    this.rays = rays;
  }

  updatePosition(x, y) {
    this.pos.set(x, y);
  }

  cast(walls) {
    for (let ray of this.rays) {
      let closest = null;
      let record = Infinity;

      for (let wall of walls) {
        const point = ray.cast(wall);

        if (point) {
          const dist = p5.Vector.dist(this.pos, point);

          if (dist < record) {
            record = dist;
            closest = point;
          }
        }
      }

      if (closest) {
        line(this.pos.x, this.pos.y, closest.x, closest.y);
        // fill(255, 0, 0);
        // ellipse(closest.x, closest.y, 10, 10);
      }
    }
  }

  show() {
    // fill(255);
    // ellipse(this.pos.x, this.pos.y, 4);

    for (let ray of this.rays) {
      ray.show();
    }
  }
}
