//question : Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target

//Example: nums = [2, 7, 11, 15], target = 9 → Output: [0, 1] (because nums[0] + nums[1] = 9)

function twoSums(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

let array = [2, 7, 11, 15];
let target = 9;
console.log(twoSums(array, target));
