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

const data = [
  { name: "Tomato", cost: 10, weight: 5 },
  { name: "Carrot", cost: 15, weight: 2 },
  { name: "Onion", cost: 5, weight: 7 },
];

function getSortValue(obj, prop) {
  return obj[prop];
}

data.sort((objA, objB) => {
  const valueA = getSortValue(objA, "name");
  const valueB = getSortValue(objB, "name");

  return valueA.localeCompare(valueB);
});

data.sort((obj1, obj2) => {
  return obj1.cost - obj2.cost;
});
