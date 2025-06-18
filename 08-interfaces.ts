// 08-interfaces.ts
export {};

/* Interfaces são usadas para definir a forma de um objeto, 
especializando os tipos de suas propriedades e métodos. 
São úteis para garantir que os objetos sigam uma estrutura específica. */

interface Usuario {
  nome: string;
  idade: number;
  ativo: boolean;
  email?: string;
}

const usuarioA: Usuario = {
  nome: "João",
  idade: 25,
  ativo: true,
};

const usuarioB: Usuario = {
  nome: "Alana",
  idade: 17,
  ativo: false,
  email: "alana@gmail.com",
};

console.log(usuarioA);
console.log(usuarioB);
