const inputz = [8, 4, 6, 1, 9, 2];
// 1, 4, 6, 8

// [4, 8, 9, 10, 6, 1, 9, 2];
// 4 > 6 ? false
// 8 > 6 ? true
// j=6
// j+1=8
// j+2=9
// j+3=10
// j=6
// si
// j=4
//
function insertionSort(arr = []) {
  for (let index = 1; index < arr.length; index++) {
    let numberToInsert = arr[index];
    let j;
    for (j = index - 1; j >= 0 && arr[j] > numberToInsert; j--) {
      console.log({ j, index, arr });
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
