function solution() {
  let str = '';
  return {
    append: (x) => (str += x),
    removeStart: (x) => (str = str.substring(x)),
    removeEnd: (x) => (str = str.substring(0, str.length - x)),
    print: () => console.log(str),
  };
}

const a = solution();
a.append('123456789');
a.removeStart(3);
a.removeEnd(3);
a.print();

