var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var botaoAdicionar = document.getElementsByName("adicionar");
var botaoSubtrair = document.getElementsByName("subtrair");

function increment() {
    if (currentNumber < 10) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
} else {
    botaoAdicionar.disabled = true;
}
}

function decrement() {
    if (currentNumber > -10) {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    } else {
        botaoSubtrair.disabled = true;
    }
}

