//Question : Roatating array by given number of times/steps

//Example : array = [1, 2, 3, 4, 5, 6, 7], steps = 3 → Output: [5, 6, 7, 1, 2, 3, 4]

function rotateArray(array, steps) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[(i + steps) % array.length] = array[i];
  }
  return result;
}

let array = [1, 2, 3, 4, 5, 6, 7];
let steps = 3;

console.log(rotateArray(array, steps)); // [5, 6, 7, 1, 2, 3, 4]
