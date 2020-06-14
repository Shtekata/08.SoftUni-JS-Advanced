function arrayMap(arr, fn) {
    return arr.reduce((p, c) => {
       return p.concat(fn(c));
    }, []);
}

console.log(arrayMap([1, 2, 3], (x) => x + 1));
console.log(arrayMap([1, 2, 3], (x) => x * 2));
let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]
let letters = ["a","b","c"];
console.log(arrayMap(letters,(l)=>l.toLocaleUpperCase())) // [ 'A', 'B', 'C' ]

const usr = {
    items: [],
    addItem(item) {
        this.items.push(item);
    }
}

arrayMap([1, 2, 3], usr.addItem.bind(usr));
console.log(usr.items);