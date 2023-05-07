//const divs = [];
const container = document.querySelector("#container");
const slider = document.querySelector(".slider");
const color = document.querySelector(".color");
const clear = document.querySelector(".clear");
const eraser = document.querySelector(".eraser");
const btns = document.querySelectorAll(".btns");
const label = document.querySelector("label");

let mode = "paint";
btns.forEach((b) => {
  b.addEventListener("click", function (e) {
    if (e.target.localName === "div") return;
    mode = e.target.classList[0];
    if (mode === "paint") b.lastElementChild.classList.remove("selected");
    else b.firstElementChild.classList.remove("selected");
    e.target.classList.add("selected");
  });
});
// Checks when mouse pressing mouse
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Generates board on start and when slider value changes
generateBoard(slider.value);
slider.addEventListener("input", () => {
  generateBoard(slider.value);
  label.textContent = `${slider.value}x${slider.value}`;
});
clear.addEventListener("click", () => {
  clearBoard();
  generateBoard(slider.value);
});

function generateBoard(size) {
  clearBoard();
  for (let i = 0; i < Math.pow(size, 2); i++) {
    const d = document.createElement("div");
    d.style.cssText = `width: ${700 / size}px; height: ${700 / size}px;`;
    d.addEventListener("mouseover", paint);
    d.addEventListener("mousedown", () => {
      if (mode === "paint") d.style.background = color.value;
      else d.style.background = "white";
    });
    container.appendChild(d);
  }
}
function clearBoard() {
  let grid = container.querySelectorAll("div");
  grid.forEach((g) => g.remove());
}

function paint() {
  if (mouseDown) {
    if (mode === "paint") this.style.background = color.value;
    else if (mode === "eraser") this.style.background = "white";
  }
}
