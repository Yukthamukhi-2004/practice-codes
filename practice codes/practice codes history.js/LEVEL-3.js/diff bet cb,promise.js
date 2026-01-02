//2/1/2025
//returned undefined
function myOwnSetTimeout(callback, duration) {
  setTimeout(function () {
    callback();
  }, duration);
}
//callback in async func
myOwnSetTimeout(function () {}, 1000);

//returning a promise
function promisifyMyOwnSetTimeout(duration) {
  const p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
  return p;
}
const ans = promisifyOwnSetTimeout(2000);
//console.log(ans); //returning the promise
ans.then(function () {
  console.log("timeout is done");
}); //callbacks in promise

//callbacks => callback hell
//promises => promise chaining => async,await

function someAsyncTask1(duration) {
  const p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve;
    }, 1000);
  });
  return p;
}
someAsyncTask1(1000).then(function () {
  console.log("first is done");
  someAsyncTask2(2000).then(function () {
    console.log("second one done");
  });
});
