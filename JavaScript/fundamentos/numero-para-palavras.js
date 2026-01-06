"use strict"; //Modo estrito
const prompt = require('prompt-sync')(); //Habilitar prompt no Node.js

// Tradutor de números para palavras

let porExtenso = "";
let dicionario = {
    0: "zero ",
    1: "um ",
    2: "dois ",
    3: "três ",
    4: "quatro ",
    5: "cinco ",
    6: "seis ",
    7: "sete ",
    8: "oito ",
    9: "nove "
}

let numero = prompt("Digite um número: ");
numero = numero.split("");
console.log(numero);

for (let i = 0; i < numero.length; i++) {
    porExtenso += dicionario[numero[i]];
}
console.log(porExtenso);