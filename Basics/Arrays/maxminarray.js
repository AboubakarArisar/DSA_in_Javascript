//question : finding maximum and minmum element in an array

function maxMinArray(array) {
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    } else if (array[i] < min) {
      min = array[i];
    }
  }
  return [max, min];
}

let array = [2, 7, 11, 15];
console.log(maxMinArray(array)); // [15, 2]
