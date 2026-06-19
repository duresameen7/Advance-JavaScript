// Closure
function outerfun(){
    let name = "Sameen";
    return function () {
        console.log(name);
        
    }
}
const test1 = outerfun();
test1();


 // Another Example 
function outerfunction() {
  let name = "Hello";
  function test2() {
    console.log(name);
  }
  test2();
}
outerfunction();