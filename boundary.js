class Boundary {
  constructor(x1, y1, x2, y2) {
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
  }

  static createRandom(quantity) {
    const boundaries = [];

    for (let i = 0; i < quantity; i++) {
      const x1 = random(width);
      const x2 = random(width);
      const y1 = random(height);
      const y2 = random(height);

      boundaries.push(new Boundary(x1, y1, x2, y2));
    }

    return boundaries;
  }

  show() {
    stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}
