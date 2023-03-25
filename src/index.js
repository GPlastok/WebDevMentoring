console.log("index.js works");

const elTestMessage = document.querySelector(".test-message");
console.log(elTestMessage);

console.log(elTestMessage.classList);
// elTestMessage.classList.remove("display-none");
// console.log(elTestMessage.classList);

const makeAppear = function () {
  elTestMessage.classList.remove("display-none");
  console.log(elTestMessage.classList);
};

setTimeout(() => {
  // document.getElementsByClassName('test.message').

  makeAppear();
  console.log("timeOut 5 seconds.");
}, "5000");
