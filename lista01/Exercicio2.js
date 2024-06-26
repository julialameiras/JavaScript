const leia = require('readline-sync');

let participante;
let primeiraNota;
let segundaNota;
let terceiraNota;
let quartaNota;
let notaFinal;

participante = leia.question("Digite o nome do participante: ");
primeiraNota = leia.questionFloat("\nDigite um valor para a Primeira Nota: ");
segundaNota = leia.questionFloat("\nDigite um valor para a Segunda Nota: ");
terceiraNota = leia.questionFloat("\nDigite um valor para a Terceira Nota: ");
quartaNota = leia.questionFloat("\nDigite um valor para a Quarta Nota: ");
notaFinal = (primeiraNota + segundaNota + terceiraNota + quartaNota) /4;
console.log("\nA média das notas de " + participante + " é " + notaFinal.toFixed(1));

