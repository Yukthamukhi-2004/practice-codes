/* What r common async functions?
   .setTimeOut
   .fs.readFile-to read a file frome ur fileSystem.
   .Fetch-to fetch some data from api endpoints
   .Sending a network request

   What is even Promise?
   its a class which makes callbackes and async functions more readable,
   when it is created,u need to pass a function as first argument which has resolve as first argument.*/

  // normal Syntax
function YukthaAsyncFunction(){
   let p = new Promise(function(resolve){
      resolve("Hi There!");
   });
   return p;
}
function main(){
   YukthaAsyncFunction().then(function(value){
   console.log(value);
   });
}
main();

//Async &Await

function YukthaAsyncFunction(){
   let p = new Promise(function(resolve){
      resolve("Hi there!");
   });
   resolve p;
}

async function main(){
   const value = await YukthaAsyncFunction();
      console.log(value);
   

}

//async works like then
//await:gives value of the promise
// without "await", output will be promise{output}

//let counter = 0;
setTimeout(() => {
  counter++;
  console.log(counter);
}, 5000);

//
let counter = 0;
setInterval(() => {
  counter++;
  console.log(counter);
}, 5000);

//reading the content of a file
const fs = require("fs");
fs.readFile("dammy.txt", "utf-8", function (err, data) {
  if (err) {
    console.error("there is an error ");
  }
  console.log(data);
});
/* differences between read and write file:
 .read file retrive data from file,while write file creates/overwrite and save the data.
 .fs.readFile(path, encoding, (err, data))
  fs.writeFile(path, content, encoding,err)
  */
//create / over write a file
const fs = require("fs");
fs.writeFile(
  "dammy.txt",
  "Yuktha is an Full-stack Developer",
  "utf8",
  (err) => {
    if (err) {
      console.err("Error:", err);
      return;
    }
    console.log("Done!");
  }
);

//file cleaner

const fs = require("fs");

const filePath = "data.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  
  const cleaned = data.replace(/\s+/g, " ").trim();

  fs.writeFile(filePath, cleaned, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File cleaned and saved!");
  });
});


