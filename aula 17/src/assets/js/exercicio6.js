const readlineSync = require('readline-sync');
const num = [
    readlineSync.question("escolha o primeiro numero: "),
    readlineSync.question("escolha o segundo numero: "),
    readlineSync.question("escolha o terceiro numero: ")
];
num.reverse();

console.log(num)

