const readlineSync = require('readline-sync');
const operacao = Number(readlineSync.question('escolha a operacao:\n 1-soma\n 2- subtracao\n 3-multiplicacao\n 4-divisao '));
console.log(operacao);

let resultado;
let n1 = Number(readlineSync.question('Escolha o primeiro numero: '))
let n2 = Number(readlineSync.question('escolha o segundo numero: '))



function somar(num1,num2){
    resultado = n1 + n2;
  console.log(`O resultado da soma: ${n1} + ${n2} = ${resultado}`);
}
function subtrair(num1,num2){
    resultado = n1 - n2;
    console.log(`O resultado da subtração: ${n1} - ${n2} = ${resultado}`);
}
function multiplicar(num1,num2){
    resultado = n1 * n2;
    console.log(`O resultado da multiplicação: ${n1} . ${n2} = ${resultado}`);
}

function dividir(num1,num2){
    resultado = n1 / n2;
    console.log(`O resultado da divisão: ${n1} / ${n2} = ${resultado}`);
}


switch(operacao){
    case 1:
        somar();
        break;
        case 2:
            subtrair();
            break;
            case 3:
                multiplicar();
                break;
                case 4:
                    dividir();
                    break;
}