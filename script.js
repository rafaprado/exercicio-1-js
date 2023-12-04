const firstNumber = +prompt("Insira o primeiro número:");
const secondNumber = +prompt("Insira o segundo número:");

const sum = alert(`A soma dos dois números é: ${firstNumber + secondNumber}`);
const sub = alert(`A subtração dos dois números é: ${firstNumber - secondNumber}`);
const mult = alert(`A multiplicação dos dois números é: ${firstNumber * secondNumber}`);
const div = alert(`A divisão dos dois números é: ${firstNumber / secondNumber}`);
const remainder = alert(`O resto da divisão dos dois números é: ${firstNumber % secondNumber}`);

alert(`A soma dos dois números é ${(sum % 2 === 0) ? "par" : "ímpar"}: ${firstNumber + secondNumber}`);
alert(`Os números inseridos são ${firstNumber === secondNumber ? "iguais" : "diferentes"}`);