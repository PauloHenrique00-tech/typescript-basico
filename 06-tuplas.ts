import { separador } from "./modulos.js";

// 06-tuplas.ts
export {};

/* Tupla
É um tipo de array especial usado quando precisamos armazenar um conjunto
fixo de elementos de tipos diferentes. */
const usuario: /* readonly */ [string, number, boolean] = ["João", 12, true];
console.log(usuario[0]);
console.log(usuario[1] + " anos");
console.log(usuario[2] ? "ativo" : "inativo");

usuario[1] = 30; // atualizando um valor da tupla (desde que não seja readonly)
console.log(usuario[1] + " anos.");

separador();

// Criando uma tupla como tipo
// type Produto = [string, number];
type Produto = [string, number];

const produtoA: Produto = ["Camiseta", 29.99];
//const produtoB: Produto = [100, "Calça"]; // erro, pois está fora do padrão da tupla
const produtoC: Produto = ["TV", 1000];

console.log(produtoA);
console.log(produtoC);

separador();

// Usando tupla no retorno de função
type Resultado = [number, string];
function verificarOperacao(sucesso: boolean): Resultado {
  if (sucesso) {
    return [200, "Operação realizada com sucesso!"];
  }
  return [500, "Erro inesperado no servidor"];
}

let [codigo, mensagem] = verificarOperacao(true);
console.log(codigo, mensagem);

//const resultadoFinal = verificarOperacao(false);

//console.log(resultadoFinal);
