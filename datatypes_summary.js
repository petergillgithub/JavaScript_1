// ***************** Primitive *****************************

// 7 Types : Strings, Numbers, Boolean , Null , Undefined , Symbol , BigInt

// const score = 10

// const scoreValue = 10.2

// const isLoggedIn = false

// const outsideTemp = null 

// let userEmail // undefiend

// const id = Symbol('123')

// const id1 = Symbol('123')

// console.log(id === id1); // false

// ***************** Non Primitive *****************************

// Array , Object , Functions

// const fruits = ["apple", "orange", "banana"]; // Array

// let fruitsName = {
//     first: "Mango",
//     second: "Apple",            // Object
//     third: 3
// }

// ************************************* Functions ********************************************************* 

// Defining the function:
function sum(num1, num2) {
    return num1 + num2;
  }
  
  // Calling the function:
  sum(3, 6); // 9

// *******************************  Anonymous Functions ***************************************************

// Named function
function rocketToMars() {
    return 'BOOM!';
  }
  
  // Anonymous function
  const rocketToMars = function() {
    return 'BOOM!';
  }

  // *******************************  return Keyword ***************************************************



  // With return
function sum(num1, num2) {
    return num1 + num2;
  }
  
  // The function doesn't output the sum
  function sum(num1, num2) {
    num1 + num2;
  }

  

  // ******************************* Calling Functions ***************************************************
// Defining the function
function sum(num1, num2) {
    return num1 + num2;
  }
  
  // Calling the function
  sum(2, 4); // 6
  