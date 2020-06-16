function solve(arr, str) {
  let arrSort = arr;

  function sortArray() {
    if (str === 'asc') {
      arrSort = arrSort.sort((x, y) => x - y);
    } else if (str === 'desc') {
      arrSort = arrSort.sort((x, y) => y - x);
    }
    return arrSort;
  }

  return sortArray(str);
}
