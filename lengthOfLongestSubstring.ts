function lengthOfLongestSubstring(s: string): number {
  const input = s.split("");
  let word = {};
  let counter = 0;
  let biggest = 0;
  for (let i = 0; i < input.length; i++) {
    if (word[input[i]] !== undefined) {
      if (counter > biggest) {
        biggest = counter;
      }
      word = { [input[i]]: i };
      counter = 1;
    } else {
      word[input[i]] = i;
      counter++;
    }
  } 
  return counter > biggest ? counter : biggest;
}

console.log(lengthOfLongestSubstring("dvdf"));
