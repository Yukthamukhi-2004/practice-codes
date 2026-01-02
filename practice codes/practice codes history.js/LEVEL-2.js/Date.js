const currentDate = new Date();
console.log("CurrentDate:", currentDate);
console.log("Date:", currentDate.getDate());
console.log("Month:", currentDate.getMonth());
console.log("Year:", currentDate.getFullYear());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());
currentDate.setFullYear(2022);
console.log("After SetFull Year:", currentDate);
/*function that calculates the time in seconds ,it takes for the Js code to calculate sum from 1 to n */
function calculateSum() {
  let a = 0;
  for (let i = 0; i < 1000000000; i++) {
    a = a + i;
  }
  return a;
}
const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum(1000000000);
const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs);

//stopwatch
function currentPrintTime() {
  console.log(new Date().getTime());
}

setInterval(currentPrintTime, 20000);
