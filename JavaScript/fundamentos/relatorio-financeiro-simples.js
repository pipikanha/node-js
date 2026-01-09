const transacoes = [
  { tipo: "entrada", valor: 3000, descricao: "Salário" },
  { tipo: "saida", valor: 400, descricao: "Internet" },
  { tipo: "saida", valor: 500, descricao: "Mercado" },
  { tipo: "entrada", valor: 150, descricao: "Freela" }
];

const valorInicial = 0;

let totalEntradas = transacoes.reduce(function (acumulador, transacao) {
    if (transacao.tipo === "entrada") {
        return acumulador + transacao.valor;
    }
    return acumulador;
}, valorInicial);
console.log(`Total de entradas: R$ ${totalEntradas}`);

let totalSaidas = transacoes.reduce(function (acumulador, transacao) {
    if (transacao.tipo === "saida") {
        return acumulador + transacao.valor;
    }
    return acumulador;
}, valorInicial);
console.log(`Total de saidas: R$ ${totalSaidas}`);

let saidasAcima300 = [];
transacoes.forEach(function(transacao){
    if (transacao.tipo === "saida" && transacao.valor > 300){
        saidasAcima300.push(transacao.descricao);
    }

});
console.log(`Saídas acima de R$ 300: ${saidasAcima300}`);


let saldoFinal = transacoes.reduce(function (acumulador, transacao) {
    if (transacao.tipo === "entrada") {
        return acumulador + transacao.valor;
    }
    else{
        return acumulador - transacao.valor;
    }
}, valorInicial);
console.log(`Saldo Final: R$ ${saldoFinal}`);
