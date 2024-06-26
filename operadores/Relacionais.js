let x = 10;
let y = 5;
let z = 20;
let w = 5; // é possível usar o 5.0 pois é equivalente ao inteiro; 5.5 já daria false
let a = "5";
let resposta;

//resposta = x > y;
//console.log("O valor de x é maior do que o valor de y?\n" + resposta);

//resposta = z >= y;
//console.log("O valor de z é maior do que o valor de y?\n" + resposta);

resposta = y == a; //se fose === o js verificaria o valor E o tipo de dado
console.log("O valor de y é igual ao valor de a?\n" + resposta);

resposta = x != y;
console.log("O valor de x é diferente do valor de y?\n" + resposta);