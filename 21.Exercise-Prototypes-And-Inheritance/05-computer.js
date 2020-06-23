function createComputerHierarchy() {
  class Battery {
    constructor(manufacturer, expectedLife) {
      this.manufacturer = manufacturer;
      this.expectedLife = expectedLife;
    }
  }

  class Keyboard {
    constructor(manufacturer, responseTime) {
      this.manufacturer = manufacturer;
      this.responseTime = responseTime;
    }
  }

  class Monitor {
    constructor(manufacturer, width, height) {
      this.manufacturer = manufacturer;
      this.width = width;
      this.height = height;
    }
  }

  class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (this.constructor.name === Computer.name) {
        throw new Error('Cannot instantiate abstract class');
      }
      this.manufacturer = manufacturer;
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
    }
  }

  class Laptop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      weight,
      color,
      battery
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.weight = weight;
      this.color = color;
      this._battery = null;
      this.battery = battery;
    }

    get battery() {
      return this._battery;
    }

    set battery(value) {
      if (value instanceof Battery == false) {
        throw new TypeError('Laptop battery must be an instance of Battery');
      }
      return (this._battery = value);
    }
  }

  class Desktop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      keyboard,
      monitor
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this._keyboard = null;
      this._monitor = null;
      this.keyboard = keyboard;
      this.monitor = monitor;
    }

    get keyboard() {
      return this._keyboard;
    }

    set keyboard(value) {
      if (value instanceof Keyboard == false) {
        throw new TypeError('Desktop keyboard must be an instance of Keyboard');
      }
      return (this._keyboard = value);
    }

    get monitor() {
      return this._monitor;
    }

    set monitor(value) {
      if (value instanceof Monitor == false) {
        throw new TypeError('Desktop monitor must be an instance of Monitor');
      }
      return (this._monitor = value);
    }
  }

  return {
    Battery,
    Keyboard,
    Monitor,
    Computer,
    Laptop,
    Desktop,
  };
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech', 70);
let monitor = new Monitor('Benq', 28, 18);
let desktop = new Desktop('JAR Computers', 3.3, 8, 1, keyboard, monitor);
// expect(desktop.manufacturer).to.equal(
//   'JAR Computers',
//   'Expected manufacturer did not match.'
// );
// expect(desktop.processorSpeed).to.be.closeTo(
//   3.3,
//   0.01,
//   'Expected processor speed did not match.'
// );
// expect(desktop.ram).to.equal(8, 'Expected RAM did not match.');
// expect(desktop.hardDiskSpace).to.equal(
//   1,
//   'Expected hard disk space did not match.'
// );
// expect(desktop.keyboard).to.equal(keyboard, 'Expected keyboard did not match.');
// expect(desktop.monitor).to.equal(monitor, 'Expected monitor did not match.');

// const comp = createComputerHierarchy();

// const battery = new comp.Battery('Samsung', 3);
// const x = new comp.Laptop('HP', 2.4, 4, 0.5, 3, 'black', battery);
// console.log(x);

// const kbd = new comp.Keyboard('Razer', 1);
// const monitor = new comp.Monitor('AOC', 60, 35);
// const y = new comp.Desktop('Dell', 3, 16, 2, kbd, monitor);
// console.log(y);
