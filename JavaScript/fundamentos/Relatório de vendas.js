const vendas = [
  { produto: "Notebook", valor: 3500 },
  { produto: "Mouse", valor: 80 },
  { produto: "Monitor", valor: 1200 }
];

let valorInicial = 0;

let totalVendas = vendas.reduce(function (acumulador, venda) {
    acumulador += venda.valor;
    return acumulador;
}
, valorInicial);

let vendasAcimaDe1000 = vendas.filter(venda => {
    return venda.valor > 1000;
});

vendas.map(venda => {
    venda.texto = `Produto: ${venda.produto}, está no valor de R$${venda.valor}`
});
console.log(vendas)