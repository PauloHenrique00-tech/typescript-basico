"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_js_1 = require("./modulos.js");
const usuario = ["João", 12, true];
console.log(usuario[0]);
console.log(usuario[1] + " anos");
console.log(usuario[2] ? "ativo" : "inativo");
usuario[1] = 30;
console.log(usuario[1] + " anos.");
(0, modulos_js_1.separador)();
const produtoA = ["Camiseta", 29.99];
const produtoC = ["TV", 1000];
console.log(produtoA);
console.log(produtoC);
(0, modulos_js_1.separador)();
function verificarOperacao(sucesso) {
    if (sucesso) {
        return [200, "Operação realizada com sucesso!"];
    }
    return [500, "Erro inesperado no servidor"];
}
let [codigo, mensagem] = verificarOperacao(true);
console.log(codigo, mensagem);
