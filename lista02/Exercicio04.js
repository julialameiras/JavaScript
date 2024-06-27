const leia = require("readline-sync");

let operacao; 
let valor = 1000;

console.log("Selecione a opção desejada");
console.log("\n 1 -- Consultar Saldo");
console.log("\n 2 -- Sacar ");
console.log("\n 3 -- Depositar ");

operacao = leia.questionInt("Digite o codigo da opcao desejada: ");

switch(operacao){
    case 1:
        console.log("O valor do seu Saldo atual é: R$",valor.toFixed(2));
        break;
    case 2:
        saque = leia.questionInt("Digite o valor que deseja sacar R$: ");
        if (saque > valor) {
            console.log("Saldo Indisponível!");
            break;
        }
        else {
            console.log("Seu novo Saldo é R$: " + (valor - saque).toFixed(2));
            break;
        }
    case 3:
        deposito = leia.questionInt("Digite o valor que deseja depositar R$: ");
        console.log("Seu novo Saldo é R$:" + (valor + deposito).toFixed(2));
        break;
    default:
        console.log("Opção inválida!");
}