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

separador();

/* Sobre tipagem implícita ou por inferência */
let exemplo1 = "Isso é uma string"; // TS infere que é string
let exemplo2 = 10; // TS infere que é number

// neste caso, não tem como o TS inferir nada. Portanto, fica como any (evitar)
let exemplo3;

// Variável sem valor mas já definida como tipo string
let exemplo4: string;
