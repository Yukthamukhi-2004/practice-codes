///Strings///
const str = "Hello World";
console.log(str.replace("World", "Javascript"));
//
const value = "Yuktha is a Achiever";
const words = value.split(" ");

console.log(words);
//
const value = "    yukthamukhi   ";
console.log(value.trim());
//
const name = "Yukthamukhi";
console.log(name.toUpperCase());
//
const name = "Yukthamukhi";
console.log(name.toLowerCase());

///Numbers///
console.log(parseFloat("42fgdghguhku"));

console.log(parseFloat("fgdghguhku42"));

console.log(parseInt("42"));

console.log(parseInt("3.14"));

///Arrays///
//PUSH
const array = [1, 9, 0, 1, 2];
array.push(4);
console.log(array);
//POP
const array = [1, 9, 0, 1, 2];
array.pop(4);
console.log(array);
//Shift
const array = [1, 9, 0, 1, 2]; //shift pops the first element in the array
array.shift();
console.log(array);
//UNshift
const array = [1, 9, 0, 1, 2]; //unshift adds the first element in the array
array.unshift(1);
console.log(array);
//concat
const a = [4, 5, 6];
const b = [7, 8, 9];
const newArray = a.concat(b);
console.log(newArray);
//forEach
const initialArray = [1, 2, 3, 4]; //forEach is method which takes function as an argument
function longThing(str) {
  console.log(str + " is a string");
}

initialArray.forEach(longThing);
