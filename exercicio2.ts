// exercicio02.ts

/* 1) Crie uma interface para representar um produto com
as propriedades nome, preço e garantia. */

/* 2) Cria uma função que receba um objeto baseado na interface Produto
e que mostre nome, preço e garantia. Obs.: o objeto deve ser desestruturado como parãmetros individuais. */

/* 3) Use a função pelo menos 2x passando produtos diferentes. */

interface Smartphone {
  nome: string;
  preco: number;
  garantia?: string;
}

const produtoA: Smartphone = {
  nome: "Iphone Piratão",
  preco: 2000,
  garantia: "doze meses",
};

const produtoB: Smartphone = {
  nome: "Celular Xiaomi",
  preco: 2500,
  garantia: "doze meses",
};

console.log(produtoA);
console.log(produtoB);

function mostrarProduto({nome, preco, garantia}: Produto) {
  if (qualidade) {
    return ["produtoA"];
}
    return ["produtoB"]
