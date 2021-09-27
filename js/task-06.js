const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', onInput);

function onInput(event) {
    if (inputText.value.length === Number(inputText.dataset.length)) {
        inputText.classList.add('valid');
    } else {
        inputText.classList.add('invalid');
    }
};

// const textInput = document.querySelector('#validation-input');

// textInput.addEventListener("blur", () => {
//     textInput.classList.remove('valid', 'invalid');

//     if (textInput.value.length === Number(textInput.dataset.length)) {
//         textInput.classList.add('valid');
//     } else {
//         textInput.classList.add('invalid');
//     }    
// });