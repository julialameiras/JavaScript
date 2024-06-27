const leia = require("readline-sync");

let codigo; 
let quantidade;

console.log("\n Produtos e seus valores: ");
console.log("\n 1 -- Cachorro Quente R$10,00");
console.log("\n 2 -- X-Salada R$15,00 ");
console.log("\n 3 -- X-Bacon R$18,00 ");
console.log("\n 4 -- Bauru R$12,00");
console.log("\n 5 -- Refrigerante R$8,00 ");
console.log("\n 6 -- Suco de Laranja R$13,00 ");

codigo = leia.questionInt("Digite o Codigo do Produto: ");
quantidade = leia.questionInt("Digite a quantidade de Produto(s) desejada: ");

switch(codigo){
    case 1:
        console.log("O valor total do(s) Cachorro(s)-quente(s) é R$:" , quantidade * (10));
        break;
    case 2:
        console.log("O valor total do(s) X-Salada R$:" , quantidade * (15));
        break;
    case 3:
        console.log("O valor total do(s) X-Bacon é R$:" , quantidade * (18));
        break;
    case 4:
        console.log("O valor total do(s) Bauru(s) é R$:" , quantidade * (12));
        break;
    case 5:
        console.log("O valor total do(s) Refrigerante(s) é R$:" , quantidade * (8));
        break;
    case 6:
        console.log("O valor total é do(s) suco(s) é R$:" , quantidade * (13));
        break;
    default:
    console.log("Opção inválida!");
}
    