"use strict";
function exibirCor(nome, cor = "roxo") {
    return `Olá ${nome}, ${cor} é a sua cor favorita.`;
}
console.log(exibirCor("João", "azul"));
console.log(exibirCor("Sofia"));
