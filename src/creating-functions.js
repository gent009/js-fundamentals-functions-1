// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function increment(number){
  return number + 1;
}
console.log(increment(1));
console.log(increment(2));

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(capitalise('Hello'));
console.log(capitalise('World'));
console.log(capitalise('Hello'));
// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below

 function greetwithSmiley(name){
const capitalized = 
name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
return 'Hi, ' + capitalized +':)';
 }
console.log(greetwithSmiley('edward', " "));
console.log(greetwithSmiley('aiyana', " "));
// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below
function countStringInArray(array){

return array.filter(item => typeof item === 'string').length;
}
console.log(countStringInArray(['edward']));
console.log(countStringInArray(['edward', 'aiyana']));
console.log(countStringInArray([0]));
console.log(countStringInArray([1,'edward']));
// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below
function addEdwardProperty(obj){
if (!obj.hasOwnProperty('edward')){
  obj.edward = 'amazing';
}
return obj;
}
console.log(addEdwardProperty({}));
console.log(addEdwardProperty({ aiyana: 'fantactic'}));
console.log(addEdwardProperty({ edward:'fabulous'}));

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increment, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalise, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: greetwithSmiley, // etc
  d: countStringInArray,
  e: addEdwardProperty
};
