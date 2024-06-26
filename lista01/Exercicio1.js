const leia = require('readline-sync');

let funcionario;
let salario;
let abono;

funcionario = leia.question ("Digite o nome do funcionario: ");
salario = leia.questionFloat("\nDigite o salario: ");
abono = leia.questionFloat("\nDigite o valor do abono: ");
console.log("\nO novo salário de " , funcionario , " é " , (salario+abono).toFixed(2));

