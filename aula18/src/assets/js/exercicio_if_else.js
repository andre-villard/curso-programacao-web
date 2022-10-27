
var read = require('../../../node_modules/readline-sync');
var nota1 = parseFloat(read.question("qual o primeira nota? "));
var nota2 = parseFloat(read.question("qual o segunda nota? "))
var nota3 = parseFloat(read.question("qual o terceira nota? "))
var nota4 = parseFloat(read.question("qual o quarta nota? "))

var media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`A sua média e: ${media}`)
if (media >= 7) {
    console.log("aprovado")
} 
else if (media < 7 || media == 6) {
    console.log("Recuperação")
}
else if ( media < 6 || media <= 5){
    console.log("reprovado")
}