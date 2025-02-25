//String : A string is a sequence of characters enclosed within single or double quotes.

// Example
var str = "Hello World!";
console.log(str); //Output: Hello World!

//string methods

//1. charAt() : This method returns the character at the specified index.

console.log(str.charAt(0));

//2. charCodeAt() : This method returns the Unicode of the character at the specified index.

console.log(str.charCodeAt(0));

//3. concat() : This method is used to concatenate one or more strings.

var str1 = "Hello";
var str2 = "World!";
console.log(str1.concat(" ", str2));

//4. indexOf() : This method returns the index of the first occurrence of the specified value.

console.log(str.indexOf("o"));

//5. lastIndexOf() : This method returns the index of the last occurrence of the specified value.

console.log(str.lastIndexOf("o"));

//6. split() : This method is used to split a string into an array of substrings.

console.log(str.split(" "));

//7. substr() : This method is used to extract a substring from a string.

console.log(str.substring(0, 5));

//8. toLowerCase() : This method is used to convert the string to lowercase.

console.log(str.toLowerCase());

//9. toUpperCase() : This method is used to convert the string to uppercase.

console.log(str.toUpperCase());

//10. trim() : This method is used to remove the whitespace from both ends of a string.

var str3 = "   Hello World!   ";
console.log(str3.trim());

//11. replace() : This method is used to replace a specified value with another value in a string.

console.log(str.replace("World", "Universe"));

//12. includes() : This method is used to check whether a string contains the specified value.

console.log(str.includes("World"));

//13. startsWith() : This method is used to check whether a string starts with the specified value.

console.log(str.startsWith("Hello"));

//14. endsWith() : This method is used to check whether a string ends with the specified value.

console.log(str.endsWith("World!"));
