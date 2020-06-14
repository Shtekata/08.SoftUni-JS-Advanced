class Hex {
  constructor(value) {
    this.value = value;
  }

  toString() {
    return `0x${this.value.toString(16).toUpperCase()}`;
  }

  valueOf() {
    return this.value;
  }

  plus(num) {
    let value = num instanceof Hex ? num.value : num;
    return new Hex(this.value + value);
  }

  minus(num) {
    let value = num instanceof Hex ? num.value : num;
    return new Hex(this.value - value);
  }

  static parse(hexValue) {
    return parseInt(hexValue, 16);
  }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
