import { separador } from "./modulos";

// 02-tipagem-basica.ts
export {};

// Exemplos de tipos básicos
let idade: number = 30;
let ativo: boolean = true;
let nome: string = "Beltrano";

console.log(`${nome} tem ${idade} anos.`);

// Nova atribuição
idade = 31;
console.log(`${nome} agora tem ${idade} anos.`);
console.log(`Status: ${ativo ? "Ativo" : "Inativo"}`);

separador();

/* Sobre o tipo any (qualquer) 
Tipo neutro, usado SOMENTE em situações de exceção em que não é
possível rapidamente identificar qual o tipo do valor (exemplo: refatoração
complexa de um projeto com JS antigo e que deve migrar pra TS).*/
let qualquerCoisa: any = "Pode ser qualquer coisa";
qualquerCoisa = 10; // number
qualquerCoisa = true; // agora boolean

console.log(`Qualquer coisa: ${qualquerCoisa}`);
