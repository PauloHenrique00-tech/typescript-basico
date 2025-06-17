import { separador } from "./modulos";

// 03-funcoes.ts
export {};

function saudacao(nome: string): string {
  return `Olá ${nome}!`;
}

console.log(saudacao("Tiago"));
// console.log(saudacao(10)); // erro, é passado number
// console.log(saudacao(true)); // erro, é passado boolean

separador();

// Uso de parâmetro opcional com a flag ? após o nome do parâmetro
function saudacaoCompleta(
  nome: string,
  anoLetivo: number = 2025,
  curso?: string
) {
  if (curso) {
    return `Olá ${nome}, você está estudando ${curso}. Ano letivo ${anoLetivo}`;
  }
  return `Olá ${nome}, sei lá o que você está fazendo... Ano: ${anoLetivo}`;
}

console.log(saudacaoCompleta("João Pedro", 2021));
console.log(saudacaoCompleta("Paulo"));
