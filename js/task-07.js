const smartInput = document.querySelector('#font-size-control');

const outputText = document.querySelector('#text');

smartInput.addEventListener("input", (event) => {
    outputText.style.fontSize = `${event.target.value}px`;
});
