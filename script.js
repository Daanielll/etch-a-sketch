//const divs = [];
const container = document.querySelector("#container");
const slider = document.querySelector(".slider");
const color = document.querySelector(".color");
let divs = [];

// Generates board on slider value change
generateBoard(slider.value);
slider.addEventListener("input", function () {
  generateBoard(slider.value);
});

function generateBoard(size) {
  clearBoard();
  for (let i = 0; i < Math.pow(size, 2); i++) {
    let d = document.createElement("div");
    d.style.cssText = `outline: 1px solid rgb(224, 234, 242); width: ${
      1000 / size
    }px; height: ${750 / size}px;`;
    d.addEventListener("mouseover", paint);
    container.appendChild(d);
  }
}
function clearBoard() {
  let grid = container.querySelectorAll("div");
  grid.forEach((g) => g.remove());
}

function paint() {
  this.style.background = color.value;
}
/*
function generateBoard(size) {
  clearBoard();
  for (let i = 0; i < size * size; i++) {
    divs[i] = document.createElement("div");
    div[i].style.cssText = `outline: 1px solid rgb(224, 234, 242); width: ${
      1000 / size
    }px; height: ${750 / size}px;`;
    container.appendChild(divs[i]);
  }
} */
