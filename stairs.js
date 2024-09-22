console.log("test");
const countWays = (n) => {
  if (n < 0) return 0;
  if (n === 0 || n === 1) return 1;
  return countWays(n - 1) + countWays(n - 2);
};

/* 2 ->   1 countWays(3)                   2
        1 countWays(2)  2 countWays(2)    1 2 X
       1 countWays(1)       return 1
       return 1       0
*/
console.log(countWays(3));

const assert = require("assert");

// Test cases

// Test case 1: No steps

assert.strictEqual(
  countWays(0),
  1,
  "There is 1 way to climb 0 steps (doing nothing)"
);

// Test case 2: 1 step
assert.strictEqual(countWays(1), 1, "There is 1 way to climb 1 step");

// Test case 3: 2 steps
assert.strictEqual(
  countWays(2),
  2,
  "There are 2 ways to climb 2 steps (1+1, or 2)"
);

// Test case 4: 3 steps
assert.strictEqual(
  countWays(3),
  3,
  "There are 3 ways to climb 3 steps (1+1+1, 1+2, 2+1)"
);

// Test case 5: 4 steps
assert.strictEqual(
  countWays(4),
  5,
  "There are 5 ways to climb 4 steps (1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2)"
);

// Test case 6: 5 steps
assert.strictEqual(countWays(5), 8, "There are 8 ways to climb 5 steps");

// Test case 7: 10 steps (bigger case to test performance)
assert.strictEqual(countWays(10), 89, "There are 89 ways to climb 10 steps");

// Test case 8: Edge case for negative steps (return 0 ways)
assert.strictEqual(
  countWays(-1),
  0,
  "There are 0 ways to climb negative steps"
);

// Test case 9: Large input (20 steps)
assert.strictEqual(
  countWays(20),
  10946,
  "There are 10946 ways to climb 20 steps"
);

console.log("All tests passed!");
