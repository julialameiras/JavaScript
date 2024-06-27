const leia = require("readline-sync");

let numero;

numero = leia.questionInt("Digite um Numero Inteiro: ");

if ((numero % 2 == 0) && (numero >= 0)){
    console.log("O numero é Par e Positivo!");}
if ((numero % 2 == 0) && (numero < 0)){
    console.log("O numero é Par e Negativo!");}
if ((numero % 2 == 1) && (numero >= 0)){
    console.log("O numero é Impar e Positivo!");}
else{
    console.log("O numero é Impar e Negativo!");}

