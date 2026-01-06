"use strict"; //Modo estrito
const prompt = require('prompt-sync')(); //Habilitar prompt no Node.js

// Criando um programa que permita ao usuário inserir números em um vetor até que ele decida parar. Em seguida, crie um novo vetor que contenha apenas os números únicos (sem repetições) do vetor original e exiba esse novo vetor.

let meuVetor = [];
let novoVetor = [];

let pergunta = prompt("Deseja adicionar um número ao vetor? (s/n): ");

while (pergunta === "s") {
    
    console.log(`Esse é o vetor atual: [${meuVetor}]`);
    let numero = Number(prompt("Digite o número:"));
    meuVetor.push(numero);

    pergunta = prompt("Quer adicionar outro número? (s/n)");
}

for (let i = 0; i < meuVetor.length; i++) {
    if (!novoVetor.includes(meuVetor[i])) {
        novoVetor.push(meuVetor[i]);
    }

}
console.log(`Vetor sem números repetidos: [${novoVetor}]`);