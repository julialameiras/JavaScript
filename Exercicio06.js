const leia = require("readline-sync");

let numero;
let positivo = 0; 

do {
  numero = leia.questionInt("\nDigite um numero inteiro: ");
  if (numero > 0) positivo = numero + positivo;
} while (numero != 0);

console.log("A soma dos números positivos foi de: " + positivo);
