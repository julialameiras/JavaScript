const leia = require("readline-sync");

let A, B, C;

A = leia.questionInt("Digite a primeira Nota: ");

B = leia.questionInt("Digite a segunda Nota: ");

C = leia.questionInt("Digite a terceira Nota: ");

if (C == (A + B)) {
    console.log("Igual");
} else if (C > (A + B)) {
    console.log("Maior");
} else {
    console.log("Menor");
}