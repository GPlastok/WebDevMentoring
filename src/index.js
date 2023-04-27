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
    // let isModalOpen = false;
    const toggleModalElements = document.querySelectorAll(buttonClassName); // button switch DOM
    const affectedElement = document.querySelector(affectedElementClassName);

    // console.log(affectedElement, switchClassNameString);
    // console.log(affectedElement.classList);

    function isModalOpen() {  // return true/false (getter function)
        return !affectedElement.classList.contains(switchClassNameString);
    }

    function fireToggle() {
        console.log("fireToggle called"); // Debugging line

        // on each click this function runs

        // isModalOpen = !isModalOpen;

        affectedElement.classList.toggle(switchClassNameString);

        console.log(`fireToggle works all the time`);
    }

    function handleModalClick(event) { // callback function from key listener
        if (event.key === 'Escape' && isModalOpen()) {
            fireToggle(); // close the modal
        }
    }

    if (toggleModalElements !== null && affectedElement !== null) {
        console.log("Adding event listeners"); // Debugging line
        // check if elements are rendered to DOM
        toggleModalElements.forEach((element) => {
            element.addEventListener("click", fireToggle);
            element.addEventListener("keydown", handleModalClick);
        }); // 1st call of function

        //--Here, ONLY if modal is open close it
        //   if (affectedElement.classList) {
        //   toggleModalElement.addEventListener("keydown", fireToggle); //2nd call of function
        // }
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

    toggleModal(".btn-toggle-modal", ".modal-container", "modal--closed");

    //A previous example showing possibilities. kept just for personal reference:
    //This works only when we have this.examplelement
    //new functionblahblah only when function uses this.whatever
    //const secondElement = new AppearElement(".test-message-two", "display-none", 10000);
    // secondElement.targetElement.classList.add("alie");
    //  test

    //test to delete:
    // const buttonTest = document.querySelector(`.btn-toggle-modal`);
    // console.log.all(`buttonTest: ${buttonTest}`);
});
