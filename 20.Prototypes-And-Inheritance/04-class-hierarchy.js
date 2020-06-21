function solve() {
  class Figure {
    constructor(units = 'cm') {
      this.units = units;
    }

    changeUnits(newUnits) {
      this.units = newUnits;
    }

    transformMetric(valInCM) {
      return this.units === 'm'
        ? valInCM / 10
        : this.units === 'mm'
        ? valInCM * 10
        : valInCM;
    }

    get area() {
      throw new Error('Not implemented!');
    }

    toString() {
      return `Figures units: ${this.units} Area: ${this.area}`;
    }
  }

  class Circle extends Figure {
    constructor(radius, units) {
      super(units);
      this.radius = radius;
    }

    get area() {
      const radius = this.transformMetric(this.radius);
      return Math.PI * radius * radius;
    }

    toString() {
      return `${super.toString()} - radius: ${this.transformMetric(
        this.radius
      )}`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super(units);
      this.width = width;
      this.height = height;
    }

    get area() {
      const width = this.transformMetric(this.width);
      const height = this.transformMetric(this.height);
      return width * height;
    }

    toString() {
      return `${super.toString()} - width: ${this.transformMetric(
        this.width
      )}, height: ${this.transformMetric(this.height)}`;
    }
  }

  return {
    Figure,
    Circle,
    Rectangle,
  };
    
}

const classes = solve();
const Figure = classes.Figure;
const Circle = classes.Circle;
const Rectangle = classes.Rectangle;

const c = new Circle(5);
console.log(c.area);
console.log(c.toString());

const r = new Rectangle(3, 4, 'mm');
console.log(r.area);
console.log(r.toString());
r.changeUnits('cm');
console.log(r.area);
console.log(r.toString());

c.changeUnits('mm');
console.log(c.area);
console.log(c.toString());