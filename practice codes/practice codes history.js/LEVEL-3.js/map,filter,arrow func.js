2 / 1 / 2025;
//Arrow func

function sum(a, b) {
  return a + b;
}

const sum = (a, b) => {
  return a + b;
};

app.get("/", (req, res) => {});

app.get("/", function (req, res) {});

const ans = sum(1, 2);
console.log(ans);

//map
//given an array ,give me back a new array in which every value is multiplied by 2
//[1,2,3,4,5]=>[2,4,6,8,10]

const input = [1, 2, 3, 4, 5];
const newArray = [];
for (let i = 0; i < input.length; i++) {
  newArray.push(input[i] * 2);
}
console.log(newArray);
//map function needs 2 inputs: an array, transformation callback/fn

//example 1-using map method
function transform(i) {
  return i * 2;
}
const ans1 = input.map(transform); // arr.method(function)-logic
console.log(ans);

//filter
//given an input array,give me back all the even values from it

const arr = [3, 4, 5, 6, 7, 8, 13, 22];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);

//example1-using filter method
function evenArr(n) {
  if (n % 2 == 0) {
    return arr.filter(evenArr);
  }
}

//example 2
const ans2 = arr.filter(function (n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans2);
