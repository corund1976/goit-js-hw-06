function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColor = document.querySelector('.color');
const buttonChange = document.querySelector('.change-color');

buttonChange.addEventListener('click', onClick);

function onClick(event) {
  spanColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const widgetButton = document.querySelector('.change-color');
// const spanColor = document.querySelector('.color');
// console.log(widgetButton);
// console.log(spanColor);

// widgetButton.addEventListener('click', () => {
//   const color = getRandomHexColor();
//   spanColor.textContent = color;
//   document.body.style.background = color;
// })