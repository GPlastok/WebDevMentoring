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

function toggleMenu(
  buttonClassName,
  affectedElementClassName,
  switchClassNameString,
  buttonLabel = {}
) {
  // Declaration of local variables and local statements as functions
  let isMenuExpanded = false;
  const toggleMenuElement = document.querySelector(buttonClassName); // button switch DOM
  const affectedElement = document.querySelector(affectedElementClassName); // target element DOM

  function updateButtonLabel() {
    toggleMenuElement.innerText = isMenuExpanded
      ? buttonLabel.close
      : buttonLabel.open;
  }

  function fireToggle() {
    // on each click this function runs
    isMenuExpanded = !isMenuExpanded;
    affectedElement.classList.toggle(switchClassNameString);
    updateButtonLabel();
  }

  if (toggleMenuElement !== null && affectedElement !== null) {
    // check if elements are rendered to DOM
    updateButtonLabel(); // 1st call of function
    toggleMenuElement.addEventListener("click", fireToggle); // 2nd call of function
  }
}

// --------MODAL TOGGLE EVENT-------------
function toggleModal(
  buttonClassName,
  affectedElementClassName,
  switchClassNameString
) {
  let isModalOpen = false;
  const toggleModalElement = document.querySelector(buttonClassName); // button switch DOM
  const affectedElement = document.querySelector(affectedElementClassName);

  function fireToggle() {
    // on each click this function runs
    isModalOpen = !isModalOpen;
    affectedElement.classList.toggle(switchClassNameString);
  }

  console.log(affectedElement);

  if (toggleModalElement !== null && affectedElement !== null) {
    // check if elements are rendered to DOM

    toggleModalElement.addEventListener("click", fireToggle); // 1st call of function
    toggleModalElement.addEventListener("keydown", fireToggle); //2nd call of function
  }
}

//----------------------------------------------------
//----------START PROGRAM-----------------------------
//
//If the dom is loaded we make two messages appear with different timing
window.addEventListener("DOMContentLoaded", () => {
  //funtion instances
  appearElementFunc(".test-message", "display-none", 1500);
  appearElementFunc(".test-message-two", "display-none", 2000);

  toggleMenu(".menu-toggle", ".sidebar", "sidebar--closed", {
    close: "CLOSE",
    open: "MENU",
  });

  toggleModal(".btn-toggle-modal", ".modal-container", "display-none");

  //A previous example showing possibilities. kept just for personal reference:
  //This works only when we have this.examplelement
  //new functionblahblah only when function uses this.whatever
  //const secondElement = new AppearElement(".test-message-two", "display-none", 10000);
  // secondElement.targetElement.classList.add("alie");
  //  test
});
