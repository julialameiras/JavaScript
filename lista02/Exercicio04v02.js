const leia = require("readline-sync");

let operacao; 
let valor = 1000;

console.log("\n Selecione a opção desejada: ");
console.log("\n 1 -- Consultar Saldo");
console.log("\n 2 -- Sacar ");
console.log("\n 3 -- Depositar ");

operacao = leia.questionInt("Digite o codigo da opcao desejada: ");

switch(operacao){
  case 1:
        console.log("O valor do saldo atual é: R$",valor.toFixed(2));
        console.log("Deseja realizar nova operacao?");
        break;
  case 2:
        console.log("O valor total do(s) X-Salada R$:" , quantidade * (15));
        break;
  case 3:
        console.log("O valor total do(s) X-Bacon é R$:" , quantidade * (18));
        break;
  default:
        console.log("Opção inválida!");
}