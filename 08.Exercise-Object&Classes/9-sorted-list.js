class List {
  constructor() {
    this._list = [];
    this.size = 0;
  }

  add(element) {
    this._list.push(element);
    // this._list.sort((x, y) => x - y);
    this.list.sort(List.sort);
    this.size++;
    return this;
  }

  remove(index) {
    this._validate(index);
    this._list.splice(index, 1);
    this.size--;
  }

  get(index) {
    this._validate(index);
    return this._list[index];
  }

  //   get size() {
  //     return this._list.length;
  //   }

  _validate(index) {
    if (index < 0 || index >= this._list.length) {
      throw new Error('Index is out of bounds');
    }
  }

  static sort(x, y) {
    return x - y;
  }
}

let list = new List();
list.add(5).add(6).add(7).add(3);
// list.add(6);
// list.add(7);
// list.add(3);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
console.log(list._list);
