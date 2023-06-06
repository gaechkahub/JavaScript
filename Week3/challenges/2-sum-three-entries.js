/**
 * Credit to https://adventofcode.com/ for this exercise

In the list below you have an array of numbers. The goal is to find the three numbers that add up to 2020.

Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [1721, 979, 366, 299, 675, 1456];
let result;
    
list.forEach((num1, index1) => {
    list.forEach((num2, index2) => {
        const num3 = list.find((num, index3) => index3 !== index1 && index3 !== index2 && index2 !== index1 && num1 + num2 + num === 2020);
        if (num3) {
        result = num1 * num2 * num3;
  }})
});
// TEST CODE, do not change
console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);