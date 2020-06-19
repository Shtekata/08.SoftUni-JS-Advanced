function solve(data) {
  const recPrototype = {
    area() {
      return this.height * this.width;
    },
    compareTo(otherRec) {
      const currentRecArea = this.area();
      const otherRecArea = otherRec.area();
      //   return currentRecArea < otherRecArea
      //     ? -1
      //     : currentRecArea === otherRecArea
      //     ? 0
      //     : 1;
        return otherRecArea - currentRecArea || otherRec.width - this.width;
    },
  };

  function createRec(width, height) {
    const result = Object.create(recPrototype);
    result.width = width;
    result.height = height;
    return result;
  }

    return data.reduce((x, [width, height]) => {
        return x.concat(createRec(width, height));
    }, []).sort((x, y) => x.compareTo(y));
}

const data = [
  [1, 20],
  [20, 1],
  [5, 3],
  [5, 3],
];
const [rec1, rec2] = solve(data);
console.log(rec1.area());
console.log(rec2.area());
console.log(rec1.compareTo(rec2));
console.log(rec2.compareTo(rec1));
console.log(data);
