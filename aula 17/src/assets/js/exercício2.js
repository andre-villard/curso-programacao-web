const readlineSync = require('readline-sync');
const sexo = Number(readlineSync.question('qual seu sexo: (Homem ou Mulher)? '));
const idade = Number(readlineSync.question('Qual sua idade? '));
const deficiencia = Number(readlineSync.question('tem alguma deficiencia ou e gestante?\n 1- Sim\n 2-Nao: '));



if (idade > 60 && deficiencia == 1){
    encaminharFilaPreferencial();
}else if (idade <= 60 && deficiencia == 2){
    naoUsarFila();
}else if (idade < 60 && deficiencia == 1){
    encaminharFilaPreferencial();
}

function encaminharFilaPreferencial(){
    console.log(`Voce é ${sexo} e tem ${idade} anos de idade, tem deficiencia ou se encontra gestante, vá para a fila preferencial.`)
}

function naoUsarFila(){
    console.log(`Voce é ${sexo} e tem ${idade} anos de idade, não tem deficiencia e nem se encontra gestante. não pode usar a fila preferencial.`)
}


