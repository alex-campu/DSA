const inputz = [2, 7, 8, 4, 6, 1, 9, 2];
// 1, 4, 6, 8

function insertionSort(arr = []) {
  for (let index = 1; index < arr.length; index++) {
    let numberToInsert = arr[index];
    let j;
    for (j = index - 1; j >= 0 && arr[j] > numberToInsert; j--) {
      if (arr[j] > numberToInsert) {
        const temp = arr[j];
        arr[j + 1] = temp;
      }
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}

console.log(insertionSort(inputz));
