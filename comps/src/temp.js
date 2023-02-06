const dropdown = document.querySelector(".w-48");

const handleClick = (event) => {
  window.timeThree = performance.now();
  if (dropdown.contains(event.target)) {
    console.log("Inside dropdown");
  } else {
    console.log("OUTSIDE Dropdown");
  }
};

document.addEventListener("click", handleClick, true);
