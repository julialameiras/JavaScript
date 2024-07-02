const leia = require("readline-sync");

let idade21 = 0;
let idade50 = 0;
let idade = 0;

while (idade >= 0) {
  idade = leia.questionInt("Digite uma idade: ");

  if (idade <= 21 && idade >= 0) {
    idade21++;
  }
  if (idade > 50) {
    idade50++;
  }
}
console.log(
  "Total de pessoas menores de 21 anos: ",
  idade21
);
console.log("Total de pessoas maiores de 50 anos: ", idade50);
