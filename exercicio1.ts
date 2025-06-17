// exercicio01.ts

/* 
1) Crie uma função chamada "exibirCor" que aceite: 
- nome da pessoa (obrigatório)
- cor preferida da pessoa (opcional)

Atenção: O parâmetro cor deve ser do tipo Cor e aceitar somente 5 cores. 

2) chame a função pelo menos 2x:
- Na primeiras, passe o nome e uma cor (das possíveis)
- Na segunda, passe somente o nome */

type Cores = "laranja" | "roxo" | "azul" | "vermelho" | "verde";

function exibirCor(nome: string, cor: Cores = "roxo"): string {
  return `Olá ${nome}, ${cor} é a sua favorita.`;
}

console.log(exibirCor("João", "azul"));
console.log(exibirCor("pedro"));
