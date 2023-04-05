"use strict";

//abstract function
function appearElementFunc(targetElementClass, className, delay = 0) {
  // Logic to make an element appear on DOM
  const targetElement = document.querySelector(targetElementClass);
  //If statement to avoid errors if the target element is not found.
  //We could use if (targetElement), but the version below is more correct.
  if (targetElement !== null) {
    setTimeout(() => {
      targetElement.classList.remove(className);
    }, delay);
  }
}

//---------------MENU TOGGLE EVENT-------------------

// function toggleMenu(buttonClassName) {
//   const toggleMenuElement = document.querySelector(buttonClassName);

//   console.log(toggleMenuElement);

//   if (toggleMenuElement !== null) {
//     toggleMenuElement.addEventListener("click", onMenuToggleClick);
//   }
// }

// function onMenuToggleClick(event) {
//   console.log(`hello from ${event.target}`);
//   event.target.innerHTML = "clicked";
// }

//The parameter toggleBool is good for temporarily switching through code, but it's
//probably not needed for the final version

function toggleMenu(
  buttonClassName,
  affectedElementClassName,
  switchClassNameString,
  changeContentArr = [choiceZero, choiceOne]
) {
  const toggleMenuElement = document.querySelector(buttonClassName);
  const affectedElement = document.querySelector(affectedElementClassName);
  const switchClass = String(switchClassNameString);
  // const changeContentArr = [choiceZero, choiceOne];

  if (toggleMenuElement !== null && affectedElement !== null) {
    toggleMenuElement.addEventListener("click", () => {
      if (affectedElement.classList.contains(switchClass)) {
        affectedElement.classList.remove(switchClass);

        toggleMenuElement.innerHTML = String(changeContentArr[0]);
      } else if (affectedElement.classList.contains(switchClass) === false) {
        affectedElement.classList.add(switchClass);
        toggleMenuElement.innerHTML = String(changeContentArr[1]);
      }
    });
  }
}

//---------------------------------------------------
//----------START PROGRAM-----------------------------
//
//If the dom is loaded we make two messages appear with different timing
window.addEventListener("DOMContentLoaded", () => {
  //funtion instances
  appearElementFunc(".test-message", "display-none", 1500);
  appearElementFunc(".test-message-two", "display-none", 2000);

  //MOVE THE BOOL BELOW IN PROGRAM START (This is to be used as toggleBool in the toggleMenu function)
  // let menuOn = true;
  toggleMenu(".menu-toggle", ".sidebar", "sidebar--closed", ["close", "open"]);

  //A previous example showing possibilities. kept just for personal reference:
  //This works only when we have this.examplelement
  //new functionblahblah only when function uses this.whatever
  //const secondElement = new AppearElement(".test-message-two", "display-none", 10000);
  // secondElement.targetElement.classList.add("alie");
  //  test
});
