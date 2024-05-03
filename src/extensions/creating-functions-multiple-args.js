// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function range (lower, upper) {
  if (lower > upper) [lower, upper] = [upper, lower]; 
  let numbers = [];
  
   for (let i= lower; i<= upper; i++){
    numbers.push(i);
   }
   return numbers;
  }
   console.log(range(1, 3));
   console.log(range(10, 13));
   console.log(range(-1, 1));


// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
 function exclaim(str, num){
 let upperStr = str.toUpperCase();
 let exclamations = '!'.repeat(num);

 return upperStr + exclamations;
 }
console.log(exclaim('disaster', 5));
console.log(exclaim('error', 10));


// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below

function addMinutesToTime(time, minutesToAdd){
  let [hours, minutes] = time.split(':').map(Number);

  let totalMinutes = hours * 60 + minutes + minutesToAdd;

  let newHours = Math.floor(totalMinutes / 60)% 24;

  let newMinutes = totalMinutes % 60;

  newHours = newHours.toString().padStart(2, '0');
  newMinutes = newMinutes.toString().padStart(2, '0');
  return `${newHours}:${newMinutes}`;
}

console.log(addMinutesToTime('7:50', 4));
console.log(addMinutesToTime('7:50', 72));
console.log(addMinutesToTime('11:50', 20));
console.log(addMinutesToTime('12:50', 120));
console.log(addMinutesToTime('23:50', 30));




// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: range, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: exclaim, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addMinutesToTime // etc
}
