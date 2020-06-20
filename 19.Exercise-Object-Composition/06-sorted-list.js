function solve() {
  const list = [];
  let size = 0;

  const instance = {
    add,
    remove,
    get,
    size,
  };

  Object.defineProperty(instance, 'size', {
    get() {
      return size;
    },
  });

  function add(element) {
    list.push(element);
    list.sort(comparator);
    size++;
    return instance;
  }

  function remove(index) {
    _validate(index);
    list.splice(index, 1);
    instance.size--;
    return instance;
  }

  function get(index) {
    _validate(index);
    return list[index];
  }

  function _validate(index) {
    if (index < 0 || index >= list.length) {
      throw new Error('Index is out of bounds');
    }
  }

  function comparator(x, y) {
    return x - y;
  }

  return instance;
}

const list = solve();
const list2 = solve();
list.add(7).add(6).add(3);
list2.add(734).add(623).add(345).add(145).add(35);
list.remove(2);
list2.remove(4);
console.log(list.size);
console.log(list2.size);
console.log(list.get(1));
console.log(list2.get(3));

console.log(list);
console.log(list2);
// list.remove(9);
