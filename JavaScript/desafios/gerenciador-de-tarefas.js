"use strict"; //Modo estrito
const prompt = require('prompt-sync')(); //Habilitar prompt no Node.js

//Gerenciador de Tarefas

let tarefas = [];
let tarefasRemovidas = [];
function adicionarTarefa() {
    let tarefa = {nome: "", descricao: "", concluida: false};
    let tarefaNome = prompt("Digite a tarefa que deseja adicionar: ");   
    let tarefaDescricao = prompt("Digite a descrição da tarefa: ");
    let tarefaPrioridade = prompt("A tarefa é prioritária? (s/n): ").toLowerCase();
    
    tarefa.nome = tarefaNome;
    tarefa.descricao = tarefaDescricao;
    if (tarefaPrioridade === 's') {
        tarefas.unshift(tarefa); // Adiciona no início da lista
    } else {
        tarefas.push(tarefa); // Adiciona no final da lista
    }
}
function listarTarefas() {
    console.log("Tarefas:");
    for (let i = 0; i < tarefas.length; i++) {
        console.log(`${i + 1}. ${tarefas[i].nome} status: ${tarefas[i].concluida ? "Concluída" : "Pendente"}`);
    }
    
   
    
}
function tarefasPendentes() {
    console.log("Tarefas Pendentes:");
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].concluida === false) {
            console.log(`${i + 1}. ${tarefas[i].nome} - ${tarefas[i].descricao}`);
        }
    }
}
function tarefasConcluidas() {
    console.log("Tarefas Concluídas:");
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].concluida === true) {
            console.log(`${i + 1}. ${tarefas[i].nome} - ${tarefas[i].descricao}`);
        }
    }
}
function marcarTarefaConcluida() {
    listarTarefas();
    let tarefaIndex = parseInt(prompt("Digite o número da tarefa que deseja marcar como concluída: ")) - 1;
    while (tarefaIndex < 0 || tarefaIndex >= tarefas.length) {
        console.log("Número inválido. Tente novamente.");
        tarefaIndex = parseInt(prompt("Digite o número da tarefa que deseja marcar como concluída: ")) - 1;
    }
    if (tarefas[tarefaIndex].concluida === false) {
        tarefas[tarefaIndex].concluida = true;
        console.log(`Tarefa "${tarefas[tarefaIndex].nome}" marcada como concluída.`);
    } else {
        console.log(`A tarefa "${tarefas[tarefaIndex].nome}" já está concluída.`);
    }
}
function marcarTarefaPendente() {
    listarTarefas();
    let tarefaIndex = parseInt(prompt("Digite o número da tarefa que deseja marcar como pendente: ")) - 1;
    while (tarefaIndex < 0 || tarefaIndex >= tarefas.length) {
        console.log("Número inválido. Tente novamente.");
        tarefaIndex = parseInt(prompt("Digite o número da tarefa que deseja marcar como pendente: ")) - 1;
    }
    if (tarefas[tarefaIndex].concluida === true) {
        tarefas[tarefaIndex].concluida = false;
        console.log(`Tarefa "${tarefas[tarefaIndex].nome}" marcada como pendente.`);
    } else {
        console.log(`A tarefa "${tarefas[tarefaIndex].nome}" já está pendente.`);
    }
}
function removerTarefa() {
    listarTarefas();
    let tarefaIndex = parseInt(prompt("Digite o número da tarefa que deseja remover: ")) - 1;
    while (tarefaIndex < 0 || tarefaIndex >= tarefas.length) {
        console.log("Número inválido. Tente novamente.");
        tarefaIndex = parseInt(prompt("Digite o número da tarefa que deseja remover: ")) - 1;
    }
    tarefasRemovidas = tarefas.splice(tarefaIndex, 1);

    console.log("Tarefa removida com sucesso.");
}
function listarTarefasRemovidas() {
 console.log("Tarefas Removidas:");
        for (let i = 0; i < tarefasRemovidas.length; i++) {
            console.log(`${i + 1}. ${tarefasRemovidas[i].nome} - ${tarefasRemovidas[i].descricao}`);
        }
}

console.log("Bem-vindo ao seu gerenciador de tarefas!");
let userQ = parseInt(prompt("O que deseja fazer? \n1 - Listar todas as tarefas \n2 - Adicionar tarefa\n3 - Listar tarefas pendentes\n4 - Listar tarefas concluídas\n5 - Marcar tarefa como concluída\n6 - Marcar tarefa como pendente\n7 - Remover tarefa\n8 - Mostrar tarefas removidas\n 9 - Sair\n"));

while (userQ !== 9) {
    if (userQ === 1) {
        listarTarefas();
         if (tarefas.length >= 1) {
        let verDetalhes = prompt("Deseja ver os detalhes de alguma tarefa? (s/n): ").toLowerCase();
        if (verDetalhes === 's') {
        let tarefaIndex = parseInt(prompt("Digite o número da tarefa: ")) - 1;
        while (tarefaIndex < 0 || tarefaIndex >= tarefas.length) {
            console.log("Número inválido. Tente novamente.");
            tarefaIndex = parseInt(prompt("Digite o número da tarefa: ")) - 1;
        }
        console.log(`Detalhes da Tarefa:\nNome: ${tarefas[tarefaIndex].nome}\nDescrição: ${tarefas[tarefaIndex].descricao}\nStatus: ${tarefas[tarefaIndex].concluida ? "Concluída" : "Pendente"}`);
    }
    }
    } else if (userQ === 2) {
        adicionarTarefa();
    } else if (userQ === 3) {
        tarefasPendentes();
    } else if (userQ === 4) {
        tarefasConcluidas();
    } else if (userQ === 5) {
        marcarTarefaConcluida();
    } else if (userQ === 6) {
        marcarTarefaPendente();
    } else if (userQ === 7) {
        removerTarefa();
    } else if (userQ === 8) {
        listarTarefasRemovidas();
    }else if (userQ === 9 ){
        console.log("Saindo do gerenciador de tarefas. Até mais!");
        break;

    }else{
        console.log("Opção inválida. Tente novamente.");
        userQ = parseInt(prompt("O que deseja fazer? \n1 - Listar todas as tarefas \n2 - Adicionar tarefa\n3 - Listar tarefas pendentes\n4 - Listar tarefas concluídas\n5 - Marcar tarefa como concluída\n6 - Marcar tarefa como pendente\n7 - Remover tarefa\n8 - Mostrar tarefas removidas\n 9 - Sair\n"));
    }
    userQ = parseInt(prompt("O que deseja fazer? \n1 - Listar todas as tarefas \n2 - Adicionar tarefa\n3 - Listar tarefas pendentes\n4 - Listar tarefas concluídas\n5 - Marcar tarefa como concluída\n6 - Marcar tarefa como pendente\n7 - Remover tarefa\n8 - Mostrar tarefas removidas\n 9 - Sair\n"));
}