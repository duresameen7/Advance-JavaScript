// Fuctions 
function test(a = 3){
    console.log("Hello World!");
}
// Arguments
test()

function addition(a = 8, b = 5){
    return a + b;
}
console.log(addition())

// Function Expression
const output = () => {
    return 3 + 4;
};
console.log(output());

// Anonymous function
(function (){
    console.log("Hello World!");
})()

// Higher Order Function
const test = (a, fn) => {
    fn();
}

const fn = () => {
    console.log("fn function")
}
test (5,fn)