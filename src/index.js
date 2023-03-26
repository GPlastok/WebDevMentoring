"use strict";

//abstract function
function AppearElementFunc(targetElementClass, className, delay = 0) {
  // Logic to make an element appear on DOM
  const targetElement = document.querySelector(targetElementClass);
  //If statement to avoid errors if the target element is not found.
  //We could use if (tergetElement), but the version below is more correct.
  if (targetElement !== null) {
    setTimeout(() => {
      targetElement.classList.remove(className);
    }, delay);
  }
}

//If the dom is loaded we make two messages appear with different timing
window.addEventListener("DOMContentLoaded", () => {
  //funtion instances
  new AppearElementFunc(".test-message", "display-none", 0);
  new AppearElementFunc(".test-message-two", "display-none", 0);

  //A previous example showing possibilities. kept just for personal reference:
  //const secondElement = new AppearElement(".test-message-two", "display-none", 10000);
  // secondElement.targetElement.classList.add("alie");
  //  test
});
