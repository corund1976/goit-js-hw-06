const fontSizeInput = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

fontSizeInput.addEventListener('input', onInput);

function onInput(event) {
    const fontSize = event.currentTarget.value;

    textOutput.style.fontSize = `${fontSize}px`;
    console.log(fontSize);
}

// const smartInput = document.querySelector('#font-size-control');

// const outputText = document.querySelector('#text');

// smartInput.addEventListener("input", (event) => {
//     outputText.style.fontSize = `${event.target.value}px`;
// });
