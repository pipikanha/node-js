
const cadastros = [
  { email: "joao@email.com", senha: "123456" },
  { email: "ana@email.com", senha: "123" },
  { email: "", senha: "abcdef" }
];


cadastros.map((cadastro) => {

    if (cadastro.email.length > 6 && cadastro.email.includes("@") && cadastro.senha.length >= 6) {
        cadastro.valido = true;
    }
    else {
        cadastro.valido = false;
    }
});

let cadastrosValidos = cadastros.filter((cadastros) => {
    return cadastros.valido === true;
});
