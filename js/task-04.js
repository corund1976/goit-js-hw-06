let counterValue = 0;

const spanCounter = document.querySelector('#value');

const incrButton = document.querySelector('button[data-action="increment"]');
const decrButton = document.querySelector('button[data-action="decrement"]');

incrButton.addEventListener('click', () => {
    counterValue += 1;
    spanCounter.textContent = counterValue;
});

decrButton.addEventListener('click', () => {
    counterValue -= 1;
    spanCounter.textContent = counterValue;
});

/ let counterValue = 0;

// const decrementBtn = document.querySelector('button[data-action="decrement"]');

// const incrementBtn = document.querySelector('button[data-action="increment"]');

// const spanWithCounter = document.querySelector('#value');

// decrementBtn.addEventListener("click", () => {
//     counterValue -= 1;
//     spanWithCounter.textContent = counterValue;
// });

// incrementBtn.addEventListener("click", () => {
//     counterValue += 1;
//     spanWithCounter.textContent = counterValue;
// });

// const clickCounter = {
//   incrementButton: document.querySelector("[data-action='increment']"),
//   decrementButton: document.querySelector("[data-action='decrement']"),
//   spanOfValue: document.getElementById('value'),
// };

// let counterValue = 0;

// const increment = () => {
//   counterValue += 1;
//   clickCounter.spanOfValue.textContent = counterValue;
// };

// const decrement = () => {
//   counterValue -= 1;
//   clickCounter.spanOfValue.textContent = counterValue;
// };

// clickCounter.incrementButton.addEventListener('click', increment);
// clickCounter.decrementButton.addEventListener('click', decrement);