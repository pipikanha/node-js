"use strict";   //Modo estrito
const prompt = require('prompt-sync')(); //Habilitar prompt no Node.js

// Estoque básico de produtos

const estoque = [
    {nome: "Arroz" , quantidade: 36 },
    {nome: "Feijão", quantidade: 27},
    {nome: "Farinha panko", quantidade: 15},
    {nome: "Macarrão", quantidade: 42},
    {nome: "Azeite de oliva", quantidade: 8}
];

function listarEstoque() {
for (let i = 0; i< estoque.length; i++) {
    console.log(`${i} - Produto: ${estoque[i].nome}, Quantidade: ${estoque[i].quantidade}`);
}
}

console.log("Bem vindo ao sistema de gestão de estoque!");
console.log("Produtos em estoque:");
listarEstoque();

let userQ = prompt("Oque deseja fazer? (1 - Adicionar produto, 2 - Vender produto, 3 - Sair): ");


while (userQ !== "3") {
    if (userQ === "1") {
        let produto = {
        nome: "",
        quantidade: 0,
        minimo: 0
    }
    produto.nome = prompt("Digite o nome do produto: ");
    produto.quantidade = parseInt(prompt("Digite a quantidade do produto: "));
    estoque.push(produto);
    listarEstoque();
    }
    else if (userQ === "2") {
        let vendaIndex = parseInt(prompt("Digite o índice do produto que deseja vender: "));
        while (vendaIndex < 0 || vendaIndex >= estoque.length) {
            console.log("Índice inválido. Tente novamente.");
            vendaIndex = parseInt(prompt("Digite o índice do produto que deseja vender: "));
        }
        console.log(`Produto selecionado: ${estoque[vendaIndex].nome}, Quantidade em estoque: ${estoque[vendaIndex].quantidade}`);
        let vendaQuantidade = parseInt(prompt("Digite a quantidade que deseja vender: "));
        while (vendaQuantidade > estoque[vendaIndex].quantidade) {
            console.log("Quantidade insuficiente em estoque!");
            vendaQuantidade = parseInt(prompt("Digite a quantidade que deseja vender: "));
        }
            estoque[vendaIndex].quantidade -= vendaQuantidade;
            console.log("Venda realizada com sucesso!");
            console.log("Produtos em estoque:");
            listarEstoque();
    }
    userQ = prompt("Oque deseja fazer? (1 - Adicionar produto, 2 - Vender produto, 3 - Sair): ");
    listarEstoque();
}

