"use strict"; //Modo estrito
const prompt = require('prompt-sync')(); //Habilitar prompt no Node.js

// Comparar dois números e informar qual é o maior, se é par ou ímpar, e a média dos dois mais o maior.

let numUm = parseFloat(prompt("Digite o primeiro número: "));
let numDois = parseFloat(prompt("Digite o segundo número: "));
let parimpar;
let media;
if (numUm > numDois){
    
    parimpar = (numUm % 2 === 0) ? "par" : "ímpar";
    console.log(`O número ${numUm} é maior que o número ${numDois} e ele é ${parimpar}`);
    media = ((numUm + numDois) + numDois + numUm) / 3;
    console.log(`A média de ${numUm} e ${numDois} e ${numUm} + ${numDois} é ${media}`);
    
}
else if (numDois > numUm){
    parimpar = (numUm % 2 === 0) ? "par" : "ímpar";
    console.log(`O número ${numDois} é maior que o número ${numUm} e ele é ${parimpar}`);
    media = ((numUm + numDois) + numDois + numUm) / 3;
    console.log(`A média de ${numUm} e ${numDois} e ${numUm} + ${numDois} é ${media}`);
}

