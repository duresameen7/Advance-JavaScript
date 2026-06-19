// Every 
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const numbers = [1,2,3,4,5,6,7];

const output = numbers.every((num) => num > 6);
console.log(output);

// Some
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

const output_1 = numbers.some((num) => num < 5);
console.log(output_1);

// Include 
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const arr = [1,4,6,8,3];
const output_2 = arr.includes(6);
console.log(output_2);

// Join
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const array = ["s","a","m","e","e","n"];
const output_3 = array.join(" ");
console.log(output_3);

// Reduce
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const arr_1 = [1,2,3,4,5];
const output_4 = arr_1.reduce((acc, curr) => acc + curr);
console.log(output_4);

// Find
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

