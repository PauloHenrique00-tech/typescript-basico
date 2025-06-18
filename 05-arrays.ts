import { separador } from "./modulos";

// 05-arrays.ts
export {};

// Sintaxe 1
const bandas: Array<string> = ["Metallica", "Slayer", "Iron Maiden"];
// bandas.push(10); // erro
bandas.push("Nightwish");
console.log(bandas);

// Sintaxe 2
const artistas: string[] = ["Jon Oliva", "Sting", "David Gilmour"];
artistas.push("Neil Peart");
console.log(artistas);

separador();

// Arrays com tipos mistos ou combinados
const pessoas: (string | number)[] = ["Tiago", 28, "Maria", 45];
console.log(pessoas);

separador();

const linguagens: string[][] = [
  ["JS", "TS"],
  ["HTML", "CSS", "Bootstrap"],
];

console.log(linguagens[0][0]);
console.log(linguagens[1][0]);

separador();

/* Mini-exercício
1) Crie um array de números e calcule a soma de todos os elementos. 
2) Calcule a soma de todos os elemtentos e guarde numa variável
3) Mostre o resultado da soma */

const numeros: Array<number> = [10, 20, 30, 40, 50];
console.log(numeros);

const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(total);
