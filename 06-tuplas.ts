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
