const assert = require("assert");

function binarySearch2(arr, num) {
  let left = 0;
  let right = arr.length - 1; //11
  let i = Math.round(right / 2); // 6
  let found = -1;
  while (left < right) {
    if (arr[i] === num) {
      found = i;
      break;
    }
    if (arr[i] < num) {
      left = i;
      i = i + Math.round((right - left) / 2);
    }
    if (arr[i] > num) {
      right = i;
      i = Math.floor((right - left) / 2);
    }
  }
  return found;
}

function binarySearch(arr = [], num) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== num) {
    if (left >= right) {
      return -1;
    }
    if (num < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return middle;
}

function testSearch(inputs = { input: [], num: 0, output: 0 }) {
  console.log(`finding ${inputs.num}`, binarySearch(inputs.input, inputs.num));
  assert.strictEqual(
    binarySearch(inputs.input, inputs.num),
    inputs.output,
    `Correct index is ${inputs.output}`
  );
}

const test1 = { input: [0, 1, 2, 3, 4, 5], num: 4, output: 4 };
testSearch(test1);

testSearch({
  input: [1, 2, 9, 22, 30, 50, 55, 100, 200, 500, 501],
  num: 50,
  output: 5,
});

testSearch({
  input: [-1, 0, 2, 9, 22, 30, 50, 55, 100, 200, 500, 501],
  num: -1,
  output: 0,
});

testSearch({
  input: [-1, 0, 2, 9, 22, 30, 50, 55, 100, 200, 500, 501],
  num: 501,
  output: 11,
});

// not found
testSearch({
  input: [-1, 0, 2, 9, 22, 30, 50, 55, 100, 200, 500, 501],
  num: 52,
  output: -1,
});

console.log("All tests passed!");
