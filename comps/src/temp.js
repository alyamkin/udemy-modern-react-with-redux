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

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ done: true });
//   }, 10000);
// });

function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;

    script.onload = resolve(script);
    script.onerror = reject(new Error(`Error loading script ${src}`));

    document.head.append(script);
  });
}

let promise = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

promise.then(
  (script) => alert(`${script.src} загружен!`),
  (error) => alert(`Ошибка: ${error.message}`)
);

[...document.querySelectorAll("*")].filter((el) => {
  return !["", "static"].includes(el.style.position);
});
