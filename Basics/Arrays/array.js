//Arrays : Arrays are a special type of objects. They hold multiple values in a single variable.

// Creating an Array
// There are two ways to create an array:
// 1. Using an array literal - var array_name = [item1, item2, ...];
// 2. Using the Array constructor - var array_name = new Array(item1, item2, ...);

// Example
var fruits = ["Apple", "Banana", "Mango"];
var cars = new Array("Toyota", "Honda", "BMW");

// Accessing Elements
// You can access an array element by referring to the index number.
// Example
var first = fruits[0]; // Apple
var last = fruits[fruits.length - 1]; // Mango

// Looping through an Array
// You can loop through the elements of an array using a for loop.
// Example
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Adding Array Elements
// The easiest way to add a new element to an array is using the push() method.

fruits.push("Orange"); // Adds a new element (Orange) to fruits

// Removing Array Elements
// The easiest way to remove a new element to an array is using the pop() method.

fruits.pop(); // Removes the last element (Orange) from fruits

console.log(fruits);
