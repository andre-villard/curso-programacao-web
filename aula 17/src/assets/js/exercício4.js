const readlineSync = require('readline-sync');
const n = Number(readlineSync.question('digite um numero: '))
exibirN();

function exibirN(){
for (let i = 0; i <= n; i = i + 1){
    console.log(i / 2 == 0)
}
}

