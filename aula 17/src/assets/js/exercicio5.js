const readlineSync = require('readline-sync');

function escolherFruta(){
const escolha = Number(readlineSync.question('escolha uma das frutas:\n 1- maca\n 2- kiwi\n 3- melancia:\n '))

const fruta = "melancia"

switch (escolha){
    case 1:
        console.log('não vendemos essa fruta aqui');
        break;
        case 2:
        console.log('Estamos com escassez de kiwis');
        break;
        case 3:
            console.log('aqui está, são 3 reais o quilo')
}
escolherMaisUma();

if (escolha !== 1 && escolha !== 2 && escolha !== 3){
    console.log('erro no console');
}

function escolherMaisUma(){
    let escolha = Number(readlineSync.question('deseja escolher mais uma fruta?\n 1- sim\n 2- nao:\n'))
    if (escolha === 1){
        escolherFruta();
    }else if (escolha !== 1 && escolha !== 2){
        console.log('esolha uma opção que exista');
        escolherMaisUma();
    }else{
        console.log('obrigado po comprar aqui :)')
    }
}
}
escolherFruta();




