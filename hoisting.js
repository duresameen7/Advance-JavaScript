// Hoisting

a = 11;
console.log(a);
// Using Var
var a = 10;
console.log(a);

// Using let 
console.log(b);
let b = 12;

console.log(c);
const c = 14;

// Using function declaration
test();

function test() {
  console.log("Hello Test!");
}
test();
a = 10;
var test = () => {
  console.log("Hello Test!");
};
var test = function () {
  console.log("Hello Test!");
};
function test123() {
  console.log("test123!");
}
window.test123();
let a = 10;
console.log(window.a);