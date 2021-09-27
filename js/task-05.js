const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', onInput);

function onInput(event) {
    if (event.currentTarget.value.length < 1) {
        return outputText.textContent = "Anonymous";
    }

    outputText.textContent = event.currentTarget.value;
}

// const textInput = document.querySelector('#name-input');
// const textOutput = document.querySelector('#name-output');

// textInput.addEventListener('input', (event) => {
//   textOutput.textContent = event.currentTarget.value;
  
//   if (event.currentTarget.value.length === 0) {
//       textOutput.textContent = "Anonymous";
//   }
// });