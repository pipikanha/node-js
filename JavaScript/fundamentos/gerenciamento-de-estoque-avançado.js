"use strict";   //Modo estrito
const prompt = require('prompt-sync')(); //Habilitar prompt no Node.js

// Sistema de gestão de estoque mais avançado


let estoque = [];
let userQ = prompt("Deseja entrar na gestão de estoque? (s/n): ");
userQ = userQ.toLowerCase();
if (userQ !== 's') {
    console.log("Programa encerrado.");
    process.exit(0);
}


function adicionarProduto() {
    let produto = {
        nome: "",
        quantidade: 0,
        minimo: 0
    }
    produto.nome = prompt("Digite o nome do produto: ");
    produto.quantidade = parseInt(prompt("Digite a quantidade do produto: "));
    produto.minimo = parseInt(prompt("Digite o estoque mínimo do produto: "));
    estoque.push(produto);

}

while(userQ === 's')
{
    let opcao = prompt("Escolha uma opção: \n1 - Adicionar produto\n2 - Vender produto\n3 - produtos com estoque abaixo do mínimo\n4- Listar todos os produtos\n");
    if (opcao === "1") {
    adicionarProduto();

}else if (opcao === "2") {
    
    for (let i = 0; i < estoque.length; i++) {
        console.log(`${i} - Produto: ${estoque[i].nome}, Quantidade: ${estoque[i].quantidade}`);
    }
    let vendaIndex = parseInt(prompt("Digite o índice do produto que deseja vender: "));
    while (vendaIndex < 0 || vendaIndex >= estoque.length) {
        console.log("Índice inválido. Tente novamente.");
        vendaIndex = parseInt(prompt("Digite o índice do produto que deseja vender: "));
    }
    let vendaQuantidade = parseInt(prompt("Digite a quantidade que deseja vender: "));
        
        if (vendaQuantidade <= estoque[vendaIndex].quantidade) {
            estoque[vendaIndex].quantidade -= vendaQuantidade;
            console.log("Venda realizada com sucesso!");
        } 
        else {
            console.log("Quantidade insuficiente em estoque!");
        }

}
else if (opcao === "3") {
    console.log("Produtos com estoque abaixo do mínimo:");
    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].quantidade < estoque[i].minimo) {
            console.log(`Produto: ${estoque[i].nome}, Quantidade: ${estoque[i].quantidade}, Estoque Mínimo: ${estoque[i].minimo}`);
        }
    }
}
else{
    console.log("Produtos no estoque:");
    for (let i = 0; i < estoque.length; i++) {
        console.log(`Produto: ${estoque[i].nome}, Quantidade: ${estoque[i].quantidade}, Estoque Mínimo: ${estoque[i].minimo}`);
    }
}   
userQ = prompt("Deseja continuar na gestão de estoque? (s/n): ").toLowerCase();

}
