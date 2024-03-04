// function openHamburger(){

// }

let isHamburgerOpen = false;

const openHamburger = () => {
  let hamburgerItemsElement = document.getElementById("hamburger-list");

  if (!isHamburgerOpen) {
    hamburgerItemsElement.style.display = "block";
    isHamburgerOpen = true;
  } else {
    hamburgerItemsElement.style.display = "none";
    isHamburgerOpen = false;
  }
};
