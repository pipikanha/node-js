"use strict"; //Modo estrito
const prompt = require('prompt-sync')(); //Habilitar prompt no Node.js

// Adicionar 5 números em um vetor, verificar o maior, o menor, quantos são pares e ímpares, e se um número fornecido pelo usuário está no vetor.

const vetor = [];
let qntpar = 0;
let qntimpar = 0;


for (let i = 1; i <= 5; i++) {
    vetor.push(parseFloat(prompt(`Digite o número ${i}: `)));
}
console.log(`Seu Vetor: ${vetor}`);
let maior = vetor[0];
let menor = vetor[0];

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
        qntpar++;
    }
    else{
        qntimpar++;
    }
    if (vetor[i] > maior) {
        maior = vetor[i];
    }
    if (vetor[i] < menor) {
        menor = vetor[i];
    }
}
console.log(`O maior número é: ${maior}`);
console.log(`O menor número é: ${menor}`);
console.log(`Quantidade de números pares: ${qntpar} \nQuantidade de números ímpares: ${qntimpar}`);

let verificar = parseInt(prompt("Digite um número para verificar se ele está no vetor: "));

if (vetor.includes(verificar)) {
    console.log(`O número ${verificar} está no vetor na posição ${vetor.indexOf(verificar)}.`);
}else{
    console.log(`O número ${verificar} não está no vetor.`);
}