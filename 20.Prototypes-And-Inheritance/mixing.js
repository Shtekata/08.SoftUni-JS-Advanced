class Base {
  test() {
    console.log('Test 123');
  }
}

const R = (B) =>
  class extends B {
    test() {
      if (super.test) {
        super.test();
      }
      console.log('R Mixing Test 123');
    }
  };

const F = (B) =>
  class extends B {
    test() {
      if (super.test) {
        super.test();
      }
      console.log('F Mixing Test 123');
    }
  };

class A extends F(R(Base)) {
  test() {
    super.test();
    console.log('A Test 123');
  }
}

const a = new A();
a.test();
