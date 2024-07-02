const leia = require("readline-sync");

let numero;
let contador;
let par = 0;
let impar = 0;

for (contador = 1; contador <= 10; contador++) {
  numero = leia.questionInt("Digite o " + contador + " numero: ");
  if (numero % 2 == 0) {
    par++;
  } 

  if (numero % 2 == 1) {
    impar++;
  }
}
console.log("\nTotal de numeros pares: ", par);
console.log("\nTotal de numeros impares: ", impar);
