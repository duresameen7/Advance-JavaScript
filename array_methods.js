// Array Methods 
const numbers = [1,4,7,5,8,2,9]
console.log(numbers.length)

for ( var i=0; i < numbers.length; i++){
    console.log(numbers[i])
};

//Map Method
// 1) Create new array
// 2) Return array of Same legth 
// 3) Map is a highr order function
 
const data = numbers.map((item, index) => {
    return item * index;
});
console.log(data)
const data = numbers.map((item, index) => item);
console.log(data)
// Filter Method
// 1) Create new array
// 2) Return array of same length or less than the original array
// 3) Filter is a higher order function

const student_age = [ 25, 19, 24, 18, 30, 26, 15]

const EligibleStudents = student_age.filter((element, index) => {
    return element > 18 && element < 25
});
console.log(student_age)
console.log(EligibleStudents)

// Sort Method
// Descending Order
const sorted_array = student_age.sort((a,b) => (a >  b ? -1 : 1));
console.log(sorted_array)
// Ascendng Order
const sorted_array = student_age.sort((a,b) => (a >  b ? 1 : -1));
console.log(sorted_array)

// For Each Method
const number = [1,2,3,4,5,6]
number.forEach((item, index) => {
    console.log(item + index)
})

// Concat
const number1 = [1,2,3,4,5,6,7]
const number2 = [7,6,5,4,1,2,3]

const mergeArray = number1.concat(number2)
console.log(mergeArray)
// Set Method
const uniqueItems = new Set(mergeArray)
console.log(uniqueItems)
// Spread Operator
console.log([...uniqueItems])

// Rest Parameter / Operator
function calculation(...numbers) {
    let sum = 0;
    for ( var i = 0; i < numbers.length; i++){
        sum =  sum + numbers[i]

    }
    return sum 
}
console.log(calculation(1,5,3,4,68,3,2))