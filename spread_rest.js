// Spread with Arrays
// const numbers_1 = [1,2,3,4,5,6];
// const numbers_2 = [7,8,9,10,11,12];
// const newArray = [...numbers_1, ...numbers_2,19,27];
// const stu_names = ["Saad","Ali","Ahmad"];
// const modifiedNames = [...stu_names, "Hamza", "Yousaf"];
// console.log(newArray); 
// console.log(modifiedNames); 

// Spread with Objects 
const userDatails = {
    id: 2,
    name: "Saad",
    email: "saad123@gmail.com"
};
const userAddress = {
    country: "Pakistan",
    city: "Peshawar",
    Postal_code: 25000,
    Street: "xyz",
    // Arrow does not support this Keyword 
    displayCity: function()  {
        console.log(this.city);
    }
};
// userAddress.displayCity();

// const FullDetails = {...userDatails, ...userAddress, gender: "Female"};
// console.log(FullDetails);

const data = [0,1,0,1,1,0]; 
const mapResult = data.map((item) => item);
console.log(mapResult);

const  filterResult = data.filter((item) => item);
console.log(filterResult);

const findResult = data.find((item) => item);
console.log(findResult);
